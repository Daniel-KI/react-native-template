import { Text, View } from 'react-native';

import { Button } from '@/components/ui/button';

export default function Index() {
  return (
    <View className='flex justify-center items-center'>
      <Text className='t text-red-800'>Home</Text>
      <Button variant='destructive' size='lg'>
        <Text>Default</Text>
      </Button>
    </View>
  );
}
