import genre from './Genre';
import {BASE_HIGH_QUALITY_IMAGE_URL, BASE_IMAGE_URL} from './Program';

export default interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  poster_high_quality_path: string;
  backdrop_path: string;
  genres: genre[];
  vote_average: number;
}

export const parseMovieImages = (movie: Movie): Movie => {
  return {
    ...movie,
    backdrop_path: BASE_IMAGE_URL + movie.backdrop_path,
    poster_path: BASE_IMAGE_URL + movie.poster_path,
    poster_high_quality_path: BASE_HIGH_QUALITY_IMAGE_URL + movie.poster_path,
  };
};
