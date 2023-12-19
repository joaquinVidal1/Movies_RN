import {searchMovies} from '../../infraestructure/api/endpoints';
import {useTopRatedMovies} from '../movies/home/queries';
import {baseInfiteQuery} from '../shared/queries';

const searchMoviesKeys = {
  all: ['search'],
};

export const useSearchMovies = (query: string) => {
  return query.length !== 0
    ? baseInfiteQuery([searchMoviesKeys.all.join(', '), query], page =>
        searchMovies(query, page),
      )
    : useTopRatedMovies();
};
