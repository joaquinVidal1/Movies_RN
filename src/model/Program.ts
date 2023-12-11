import {ApiProgram} from './../infraestructure/api/ApiProgram';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w200';
const BASE_HIGH_QUALITY_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export default interface Program {
  id: number;
  title: string;
  overview: string;
  posterPath: string;
  mediaType: 'tv' | 'movie';
  posterHighQualityPath: string;
  backdropPath: string;
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
  };
};
