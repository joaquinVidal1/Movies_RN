import {useInfiniteQuery} from '@tanstack/react-query';
import {BASE_HIGH_QUALITY_IMAGE_URL, BASE_IMAGE_URL} from '../../model/Program';
import {searchMovies} from './../../infraestructure/api/endpoints';

const searchMoviesKeys = {
  all: ['search'],
};

export const useSearchMovies = (query: string) => {
  const res = useInfiniteQuery({
    queryKey: [searchMoviesKeys.all, query],
    queryFn: ({pageParam}: {pageParam: number}) => {
      return searchMovies(query, pageParam);
    },
    getNextPageParam: lastPage => {
      const nextPage = lastPage.page + 1;
      if (nextPage > lastPage.total_pages) return undefined;
      else return nextPage;
    },
    getPreviousPageParam: firstPage => {
      const prevPage = firstPage.page - 1;
      if (prevPage <= 0) return undefined;
      else return prevPage;
    },
    select: data => {
      return {
        ...data,
        pages: data.pages.map(page => {
          return {
            ...page,
            results: page.results.map(movie => {
              return {
                ...movie,
                backdropPath: BASE_IMAGE_URL + movie.backdropPath,
                posterPath: BASE_IMAGE_URL + movie.posterPath,
                posterHighQualityPath:
                  BASE_HIGH_QUALITY_IMAGE_URL + movie.posterPath,
              };
            }),
          };
        }),
      };
    },
    initialPageParam: 1,
  });
  return {...res, data: res.data?.pages?.flatMap(page => page.results)};
};
