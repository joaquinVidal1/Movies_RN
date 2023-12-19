import genre from './Genre';

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
