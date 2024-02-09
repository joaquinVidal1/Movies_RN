import {AxiosResponse} from 'axios';
import Genre from '../../model/Genre';
import {MovieDetails} from '../../model/Movie';
import {BASE_HIGH_QUALITY_IMAGE_URL} from './../../model/Program';
import {ApiPaginatedResponse, ApiProgram} from './ApiProgram';
import {instance} from './instance';
const ACCOUNT_ID = '20375605';

function fetchProgramsFromApi<T>(
  uri: string,
): Promise<ApiPaginatedResponse<T[]>> {
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
}

export const getTrendingPrograms = (): Promise<
  ApiPaginatedResponse<ApiProgram[]>
> => {
  return fetchProgramsFromApi('/trending/all/day');
};

export const getUpcomingMovies = (page: number) => {
  return fetchProgramsFromApi<ApiProgram>(
    `/movie/upcoming?language=en-US&page=${page}`,
  );
};

export const getTopRatedMovies = (
  page: number,
): Promise<ApiPaginatedResponse<ApiProgram[]>> => {
  return fetchProgramsFromApi(`movie/top_rated?language=en-US&page=${page}`);
};

export const getMyList = async (
  page: number,
): Promise<ApiPaginatedResponse<ApiProgram[]>> => {
  try {
    const [tvSeries, movies]: AxiosResponse<
      ApiPaginatedResponse<ApiProgram[]>
    >[] = await Promise.all([
      instance.get(
        `/account/${ACCOUNT_ID}/watchlist/tv?language=en-US&page=${page}&sort_by=created_at.asc`,
      ),
      instance.get(
        `/account/${ACCOUNT_ID}/watchlist/movies?language=en-US&page=${page}&sort_by=created_at.asc`,
      ),
    ]);

    return {
      page: tvSeries.data.page,
      results: movies.data.results.concat(tvSeries.data.results),
      total_pages:
        tvSeries.data.total_pages > movies.data.total_pages
          ? movies.data.total_pages
          : tvSeries.data.total_pages,
      total_results:
        tvSeries.data.total_results > movies.data.total_results
          ? movies.data.total_results
          : tvSeries.data.total_results,
    };
  } catch (e) {
    console.log('ERROR', e);
    return Promise.reject(e);
  }
};

export const getGenres = async (): Promise<Genre[]> => {
  try {
    const response = await instance.get('/genre/movie/list');
    return response.data.genres;
  } catch (e) {
    return Promise.reject(e);
  }
};

export const getLatestMovie = async (): Promise<MovieDetails> => {
  try {
    const topRatedMovies = await getTopRatedMovies(1);
    const movieId = topRatedMovies.results[0].id;
    const movieDetails: AxiosResponse<MovieDetails> = await instance.get(
      `movie/${movieId}?language=en-US`,
    );
    return {
      ...movieDetails.data,
      backdrop_path:
        BASE_HIGH_QUALITY_IMAGE_URL + movieDetails.data.backdrop_path,
      poster_path: BASE_HIGH_QUALITY_IMAGE_URL + movieDetails.data.poster_path,
    };
  } catch (e) {
    return Promise.reject(e);
  }
};

export const addMovieToWatchlist = async (id: number) => {
  try {
    const response = await instance.post(`/account/${ACCOUNT_ID}/watchlist`, {
      media_type: 'movie',
      media_id: id,
      watchlist: true,
    });
    return response.data;
  } catch (e) {
    return Promise.reject(e);
  }
};

export const searchMovies = async (
  query: string,
  page: number,
): Promise<ApiPaginatedResponse<ApiProgram[]>> => {
  return fetchProgramsFromApi(
    `/search/movie?query=${query}&include_adult=true&language=en-US&page=${page}`,
  );
};
