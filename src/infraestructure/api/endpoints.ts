import {AxiosResponse} from 'axios';
import {ApiPaginatedResponse, ApiProgram} from './ApiProgram';
import {instance} from './instance';

export const getTrendingPrograms = (): Promise<
  ApiPaginatedResponse<ApiProgram[]>
> => {
  return instance
    .get('/trending/all/day')
    .then(response => {
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error('Error fetching products');
      }
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
};

export const getMyList = async (): Promise<ApiProgram[]> => {
  const tvSeries: AxiosResponse<ApiPaginatedResponse<ApiProgram[]>> =
    await instance.get(
      '/20375605/watchlist/tv?language=en-US&page=1&sort_by=created_at.asc',
    );
  const movies: AxiosResponse<ApiPaginatedResponse<ApiProgram[]>> =
    await instance.get(
      '/20375605/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc',
    );

  return movies.data.results.concat(tvSeries.data.results);
};
