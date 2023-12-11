import {useInfiniteQuery, useQuery} from '@tanstack/react-query';
import {
  getMyList,
  getTopRatedMovies,
  getTrendingPrograms,
} from '../infraestructure/api/endpoints';
import {ApiProgram} from './../infraestructure/api/ApiProgram';
import {getUpcomingMovies} from './../infraestructure/api/endpoints';

const programsKeys = {
  all: ['programs'],
};

const myListKeys = {
  all: ['myList'],
};

const upcomingKeys = {
  all: ['upComing'],
};

const topRatedKeys = {
  all: ['topRated'],
};

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const addBaseUrlToPrograms = (programs: ApiProgram[]) =>
  programs.map(program => {
    return {
      ...program,
      poster_path: BASE_IMAGE_URL + program.poster_path,
      backdrop_path: BASE_IMAGE_URL + program.backdrop_path,
    };
  });

export const useUpcomingMovies = () => {
  return useInfiniteQuery({
    queryKey: upcomingKeys.all,
    queryFn: ({pageParam}: {pageParam: number}) => {
      return getUpcomingMovies(pageParam);
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
            results: addBaseUrlToPrograms(page.results),
          };
        }),
      };
    },
    initialPageParam: 1,
  });
};

export const useMyList = () => {
  return useQuery({
    queryKey: myListKeys.all,
    queryFn: getMyList,
    select: data => addBaseUrlToPrograms(data),
  });
};

export const useTrendingPrograms = () => {
  return useQuery({
    queryKey: programsKeys.all,
    queryFn: getTrendingPrograms,
    select: data => addBaseUrlToPrograms(data.results),
  });
};

export const useTopRatedMovies = () => {
  return useQuery({
    queryKey: topRatedKeys.all,
    queryFn: getTopRatedMovies,
    select: data => addBaseUrlToPrograms(data.results),
  });
};
