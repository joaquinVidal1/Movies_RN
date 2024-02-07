import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import {
  getGenres,
  getLatestMovie,
  getMyList,
  getTopRatedMovies,
  getTrendingPrograms,
} from '../infraestructure/api/endpoints';
import {
  ApiPaginatedResponse,
  ApiProgram,
} from './../infraestructure/api/ApiProgram';
import {
  addMovieToWatchlist,
  getUpcomingMovies,
} from './../infraestructure/api/endpoints';
import {fromApiToModel} from './../model/Program';

const programsKeys = {
  all: ['programs'],
};

const myListKeys = {
  all: ['myList'],
};

const upcomingKeys = {
  all: ['upComing'],
};

const topRatedKeys = {
  all: ['topRated'],
};

const genresKeys = {
  all: ['genres'],
};

const latestMovieKeys = {
  all: ['Latest', 'Movie'],
};

const baseInfiteQuery = (
  queryKeys: string[],
  queryFn: (page: number) => Promise<ApiPaginatedResponse<ApiProgram[]>>,
) => {
  const res = useInfiniteQuery({
    queryKey: queryKeys,
    queryFn: ({pageParam}: {pageParam: number}) => {
      return queryFn(pageParam);
    },
    getNextPageParam: lastPage => {
      const nextPage = lastPage.page + 1;
      if (nextPage > lastPage.total_pages) return undefined;
      else return nextPage;
    },
    getPreviousPageParam: firstPage => {
      const prevPage = firstPage.page - 1;
      if (prevPage <= 0) return undefined;
      else return prevPage;
    },
    select: data => {
      return {
        ...data,
        pages: data.pages.map(page => {
          return {
            ...page,
            results: page.results.map(apiProgram => fromApiToModel(apiProgram)),
          };
        }),
      };
    },
    initialPageParam: 1,
  });
  return {...res, data: res.data?.pages?.flatMap(page => page.results)};
};

export const useUpcomingMovies = () => {
  return baseInfiteQuery(upcomingKeys.all, getUpcomingMovies);
};

export const useMyList = () => {
  return baseInfiteQuery(myListKeys.all, getMyList);
};

export const useTrendingPrograms = () => {
  return useQuery({
    queryKey: programsKeys.all,
    queryFn: getTrendingPrograms,
    select: data => data.results.map(apiProgram => fromApiToModel(apiProgram)),
  });
};

export const useTopRatedMovies = () => {
  return baseInfiteQuery(topRatedKeys.all, getTopRatedMovies);
};

export const useGenres = () => {
  return useQuery({
    queryKey: genresKeys.all,
    queryFn: getGenres,
  });
};

export const useLatestMovie = () => {
  return useQuery({
    queryKey: latestMovieKeys.all,
    queryFn: getLatestMovie,
  });
};

export const useAddMovieToWatchlist = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (mediaId: number) => addMovieToWatchlist(mediaId),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: myListKeys.all});
    },
  });
};
