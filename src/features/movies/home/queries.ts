import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import {
  addMovieToWatchlist,
  getGenres,
  getLatestMovie,
  getMyList,
  getTopRatedMovies,
  getTrendingPrograms,
  getUpcomingMovies,
} from '../../../infraestructure/api/endpoints';
import {fromApiToModel} from '../../../model/Program';
import {parseMovieImages} from './../../../model/Movie';
import {baseInfiteQuery} from './../../shared/queries';

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
  const res = useInfiniteQuery({
    queryKey: topRatedKeys.all,
    queryFn: ({pageParam}: {pageParam: number}) => {
      return getTopRatedMovies(pageParam);
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
            results: page.results.map(movie => {
              return parseMovieImages(movie);
            }),
          };
        }),
      };
    },
    initialPageParam: 1,
  });
  return {...res, data: res.data?.pages?.flatMap(page => page.results)};
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

export const useAddMovieToWatchlist = (
  getParams: () => {
    mediaId: number;
  },
) => {
  const queryClient = useQueryClient();

  const {mediaId} = getParams();

  return useMutation({
    mutationFn: () => addMovieToWatchlist(mediaId),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: myListKeys.all});
    },
  });
};
