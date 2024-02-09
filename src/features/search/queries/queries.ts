import {searchMovies} from '../../../infraestructure/api/endpoints';
import {useTopRatedMovies} from '../../movies/home/queries/queries';
import {baseInfiteQuery} from '../../shared/queries';
import {searchMoviesKeys} from './keys';

export const useSearchMovies = (query: string) => {
  return query.length !== 0
    ? baseInfiteQuery([searchMoviesKeys.all.join(', '), query], page =>
        searchMovies(query, page),
      )
    : useTopRatedMovies();
};
