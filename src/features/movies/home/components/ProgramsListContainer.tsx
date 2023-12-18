import {UseQueryResult} from '@tanstack/react-query';
import React from 'react';
import {StyleProp, ViewStyle} from 'react-native/types';
import Program from '../../../../model/Program';
import ProgramsList from './ProgramsList';

export type Props = {
  useGetPrograms: () => UseQueryResult<Program[], Error>;
  style: StyleProp<ViewStyle>;
  title: string;
};

const ProgramsListContainer: React.FC<Props> = ({
  useGetPrograms,
  style,
  title,
}) => {
  const programsResult = useGetPrograms();
  const programs = programsResult.isSuccess ? programsResult.data : [];

  return <ProgramsList programs={programs} title={title} style={style} />;
};

export default ProgramsListContainer;
