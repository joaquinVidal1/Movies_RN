import {useInfiniteQuery} from '@tanstack/react-query';
import {useTopRatedMovies} from '../movies/home/queries';
import {searchMovies} from './../../infraestructure/api/endpoints';
import {parseMovieImages} from './../../model/Movie';

const searchMoviesKeys = {
  all: ['search'],
};

export const useSearchMovies = (query: string) => {
  if (query.length !== 0) {
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
                return parseMovieImages(movie);
              }),
            };
          }),
        };
      },
      initialPageParam: 1,
    });
    return {...res, data: res.data?.pages?.flatMap(page => page.results)};
  } else {
    return useTopRatedMovies();
  }
};
