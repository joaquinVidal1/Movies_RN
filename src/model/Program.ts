import {ApiProgram} from './../infraestructure/api/ApiProgram';

export const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w200';
export const BASE_HIGH_QUALITY_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export default interface Program {
  id: number;
  title: string;
  overview: string;
  posterPath: string;
  mediaType: 'tv' | 'movie';
  posterHighQualityPath: string;
  backdropPath: string;
  genres: number[];
  voteAverage: number;
}

export const fromApiToModel = (apiProgram: ApiProgram): Program => {
  return {
    id: apiProgram.id,
    title: apiProgram.title,
    overview: apiProgram.overview,
    mediaType: apiProgram.media_type,
    backdropPath: BASE_IMAGE_URL + apiProgram.backdrop_path,
    posterPath: BASE_IMAGE_URL + apiProgram.poster_path,
    posterHighQualityPath: BASE_HIGH_QUALITY_IMAGE_URL + apiProgram.poster_path,
    genres: apiProgram.genre_ids ?? [],
    voteAverage: apiProgram.vote_average,
  };
};
