import AsyncStorage from '@react-native-async-storage/async-storage';
export const getToken = async() => {
  try {
    const value = await AsyncStorage.getItem('depaulToken');
    return value
  } catch (e) {
    console.log(e);
    return null
  }
}