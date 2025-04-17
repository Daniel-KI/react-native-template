import AsyncStorage from '@react-native-async-storage/async-storage';

const ONBOARDING_KEY = 'hasViewedOnboarding';

export async function hasViewedOnboarding() {
  const value = await AsyncStorage.getItem(ONBOARDING_KEY);
  return value === 'true';
}

export async function setViewedOnboarding() {
  await AsyncStorage.setItem(ONBOARDING_KEY, 'true');
}
