import genre from './Genre';

export default interface Movie {
  id: number;
  title: string;
  overview: string;
  posterPath: string;
  mediaType: 'tv' | 'movie';
  posterHighQualityPath: string;
  backdropPath: string;
  genres: genre[];
}
