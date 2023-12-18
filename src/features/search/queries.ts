import {baseInfiteQuery} from '../shared/queries';

const searchMoviesKeys = {
  all: ['search'],
};

export const useSearchMovies = (query: string) => {
  return baseInfiteQuery({
    queryKey: searchMoviesKeys.all,
    queryFn: query => searchMovies(query),
  });
};
