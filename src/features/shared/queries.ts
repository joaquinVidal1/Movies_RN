import {useInfiniteQuery} from '@tanstack/react-query';
import {ApiPaginatedResponse} from '../../infraestructure/api/ApiProgram';
import {fromApiToModel} from '../../model/Program';
import {ApiProgram} from './../../infraestructure/api/ApiProgram';

export const baseInfiteQuery = (
  queryKeys: string[],
  queryFn: (page: number) => Promise<ApiPaginatedResponse<ApiProgram[]>>,
) => {
  const res = useInfiniteQuery({
    queryKey: queryKeys,
    queryFn: ({pageParam}: {pageParam: number}) => {
      return queryFn(pageParam);
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
            results: page.results.map(apiProgram => fromApiToModel(apiProgram)),
          };
        }),
      };
    },
    initialPageParam: 1,
  });
  return {
    isLoading: res.isLoading,
    fetchNextPage: () => res.fetchNextPage(),
    data: res.data?.pages ?? [],
  };
};
