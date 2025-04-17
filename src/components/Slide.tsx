import React from 'react';
import { Dimensions, View, Text } from 'react-native';

import { Button, buttonTextVariants } from './ui/button';

const { width } = Dimensions.get('window');

type SlideProps = {
  title?: string;
  description?: string;
  actionButton?: {
    action: () => void;
    label: string;
  };
};

export const Slide = ({ title = '', description = '', actionButton }: SlideProps) => {
  return (
    <View className='flex-1 items-center justify-center p-6' style={{ width }}>
      {title && <Text className='text-3xl font-bold mb-4 text-gray-800'>{title}</Text>}
      {description && <Text className='text-lg text-gray-600 mb-8'>{title}</Text>}
      {actionButton && (
        <Button onPress={actionButton.action}>
          <Text className={buttonTextVariants()}>{actionButton.label}</Text>
        </Button>
      )}
    </View>
  );
};
