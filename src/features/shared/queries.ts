import {useInfiniteQuery} from '@tanstack/react-query';
import {ApiPaginatedResponse} from '../../infraestructure/api/ApiProgram';
import {fromApiToModel} from '../../model/Program';
import {ApiProgram} from './../../infraestructure/api/ApiProgram';

export function baseInfiteQuery(
  queryKeys: string[],
  queryFn: (page: number) => Promise<ApiPaginatedResponse<ApiProgram[]>>,
) {
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
  return {...res, data: res.data?.pages?.flatMap(page => page.results)};
}
