import {InfiniteQueryObserverResult} from '@tanstack/react-query';
import React from 'react';
import {ViewStyle} from 'react-native/types';
import Program from '../../../../model/Program';
import {Page} from './Page';
import ProgramsList from './ProgramsList';

export type Props = {
  useGetPrograms: () => {
    data: Program[];
    isLoading: boolean;
    fetchNextPage: () => Promise<
      InfiniteQueryObserverResult<
        {
          pages: Page<Program>[];
          pageParams: number[];
        },
        Error
      >
    >;
  };
  style: ViewStyle;
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
