import {AxiosResponse} from 'axios';
import Genre from '../../model/Genre';
import Movie from '../../model/Movie';
import {ApiPaginatedResponse, ApiProgram} from './ApiProgram';
import {instance} from './instance';

const fetchProgramsFromApi = (
  uri: string,
): Promise<ApiPaginatedResponse<ApiProgram[]>> => {
  return instance
    .get(uri)
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

export const getTrendingPrograms = (): Promise<
  ApiPaginatedResponse<ApiProgram[]>
> => {
  return fetchProgramsFromApi('/trending/all/day');
};

export const getUpcomingMovies = (
  page: number,
): Promise<ApiPaginatedResponse<ApiProgram[]>> => {
  return fetchProgramsFromApi(`/movie/upcoming?language=en-US&page=${page}`);
};

export const getTopRatedMovies = (
  page: number,
): Promise<ApiPaginatedResponse<ApiProgram[]>> => {
  return fetchProgramsFromApi(`movie/top_rated?language=en-US&page=${page}`);
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

export const getGenres = async (): Promise<Genre[]> => {
  try {
    const response = await instance.get('/genre/movie/list');
    return response.data.genres;
  } catch (e) {
    return Promise.reject(e);
  }
};

export const getLatestMovie = async (): Promise<Movie> => {
  try {
    const movie = await instance.get('/movie/latest');
    return movie.data;
  } catch (e) {
    return Promise.reject(e);
  }
};
