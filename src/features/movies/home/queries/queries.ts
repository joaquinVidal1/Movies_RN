import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {
  addMovieToWatchlist,
  getGenres,
  getLatestMovie,
  getMyList,
  getTopRatedMovies,
  getTrendingPrograms,
  getUpcomingMovies,
} from '../../../../infraestructure/api/endpoints';
import {fromApiToModel} from '../../../../model/Program';
import {baseInfiteQuery} from '../../../shared/queries/queries';
import {
  genresKeys,
  latestMovieKeys,
  myListKeys,
  programsKeys,
  topRatedKeys,
  upcomingKeys,
} from './keys';

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
