import {InfiniteQueryObserverResult} from '@tanstack/react-query';
import React from 'react';
import {StyleProp, ViewStyle} from 'react-native/types';
import Program from '../../../../model/Program';
import ProgramsList from './ProgramsList';

export type Props = {
  useGetPrograms: () => {
    data: Program[];
    isLoading: boolean;
    fetchNextPage: () => Promise<
      InfiniteQueryObserverResult<
        {
          pages: {
            results: Program[];
            page: number;
            total_pages: number;
            total_results: number;
          }[];
          pageParams: number[];
        },
        Error
      >
    >;
  };
  style: StyleProp<ViewStyle>;
  title: string;
};

const InfiniteScrollingList: React.FC<Props> = ({
  useGetPrograms,
  style,
  title,
}) => {
  const {data, fetchNextPage} = useGetPrograms();
  return (
    <ProgramsList
      programs={data}
      title={title}
      style={style}
      onEndReached={fetchNextPage}
    />
  );
};

export default InfiniteScrollingList;
