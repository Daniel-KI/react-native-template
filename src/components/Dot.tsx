import React from 'react';
import { View } from 'react-native';

import { cn } from '@/lib/utils';

type DotProps = {
  active?: boolean;
};

export const Dot = ({ active }: DotProps) => {
  const classes = cn('h-2 w-2 mx-1 rounded-full bg-gray-300', {
    'bg-red-500': active,
  });
  return <View className={classes} />;
};
