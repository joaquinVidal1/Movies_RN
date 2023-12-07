import {ApiProgram} from './ApiProgram';
import {instance} from './instance';

export const getPrograms = (): Promise<ApiProgram[]> => {
  return instance
    .get('/trending/all/day')
    .then(response => {
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error('Error fetching products');
      }
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
};
