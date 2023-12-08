import {useQuery} from '@tanstack/react-query';
import {
  getMyList,
  getTopRatedMovies,
  getUpcomingMovies,
} from '../infraestructure/api/endpoints';
import {ApiProgram} from './../infraestructure/api/ApiProgram';
import {getTrendingPrograms} from './../infraestructure/api/endpoints';

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

export const useTrendingPrograms = () => {
  return useQuery({
    queryKey: programsKeys.all,
    queryFn: getTrendingPrograms,
    select: data => addBaseUrlToPrograms(data.results),
  });
};

export const useMyList = () => {
  return useQuery({
    queryKey: myListKeys.all,
    queryFn: getMyList,
    select: data => addBaseUrlToPrograms(data),
  });
};

export const useUpcomingMovies = () => {
  return useQuery({
    queryKey: upcomingKeys.all,
    queryFn: getUpcomingMovies,
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
