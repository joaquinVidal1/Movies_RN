import genre from './Genre';

export default interface Movie {
  id: number;
  title: string;
  overview: string;
  posterPath: string;
  posterHighQualityPath: string;
  backdropPath: string;
  genres: genre[];
  vote_average: number;
}
