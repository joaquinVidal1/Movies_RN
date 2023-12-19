import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
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
