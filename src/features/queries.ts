import {useQuery} from '@tanstack/react-query';
import {getPrograms} from '../infraestructure/api/endpoints';

const programsKeys = {
  all: ['programs'],
};

export const usePrograms = enabled => {
  return useQuery({
    queryKey: programsKeys.all,
    queryFn: getPrograms,
    enabled: enabled,
  });
};
