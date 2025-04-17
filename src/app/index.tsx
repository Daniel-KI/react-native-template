import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Text, View } from 'react-native';

import { hasViewedOnboarding } from '@/storage/onboarding';

const TIMEOUT = 3000;

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    let mounted = true;
    let timer: NodeJS.Timeout;

    const prepare = async () => {
      try {
        const hasViewed = await hasViewedOnboarding();

        if (!mounted) return;

        timer = setTimeout(() => {
          if (!mounted) return;
          const route = hasViewed ? '/home' : '/onboarding';
          router.replace(route);
        }, TIMEOUT);
      } catch (error) {
        if (!mounted) return;
        console.error('Splash error:', error);
        router.replace('/home');
      }
    };

    prepare();

    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, [router]);

  return (
    <View className='flex justify-center items-center h-full'>
      <Text className='text-gray-500'>Splash</Text>
    </View>
  );
};

export default SplashScreen;
