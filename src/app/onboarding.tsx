import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import { View, ScrollView, Dimensions, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';

import { Dot } from '@/components/Dot';
import { Slide } from '@/components/Slide';
import { onboardingSlides } from '@/contants/onboardingGuide';
import { setViewedOnboarding } from '@/storage/onboarding';

const { width } = Dimensions.get('window');

const OnboardingScreen = () => {
  const router = useRouter();
  const scrollRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / width);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (currentIndex < onboardingSlides.length - 1) {
      scrollRef.current?.scrollTo({
        x: (currentIndex + 1) * width,
        animated: true,
      });
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleStart = async () => {
    await setViewedOnboarding();
    router.replace('/home');
  };

  const getActionButton = (index: number) => {
    if (index === onboardingSlides.length - 1) {
      return {
        action: handleStart,
        label: 'Start',
      };
    } else {
      return {
        action: handleNext,
        label: 'Next',
      };
    }
  };

  return (
    <View className='flex-1'>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScrollEnd}
        scrollEventThrottle={16}
        disableIntervalMomentum
        snapToInterval={width}
        decelerationRate='fast'
      >
        {onboardingSlides.map(({ title, description }, index) => (
          <Slide key={index} title={title} description={description} actionButton={getActionButton(index)} />
        ))}
      </ScrollView>

      <View className='absolute bottom-8 w-full flex-row justify-center'>
        {onboardingSlides.map((_, index) => (
          <Dot key={index} active={index === currentIndex} />
        ))}
      </View>
    </View>
  );
};

export default OnboardingScreen;
