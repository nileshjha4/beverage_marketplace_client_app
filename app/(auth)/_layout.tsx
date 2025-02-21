import { Text, View } from 'react-native'
import { Stack } from 'expo-router'
// import { StatusBar } from 'expo-status-bar'
const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen
      name='sign-in'
      options={{
        headerShown: false,
      }} 
      />
      <Stack.Screen
      name='sign-up'
      options={{
        headerShown: false,
      }} 
      />
      <Stack.Screen
      name='sign-up1'
      options={{
        headerShown: false,
      }} 
      />
      <Stack.Screen
      name='sign-up2'
      options={{
        headerShown: false,
      }} 
      />
      {/* <StatusBar
      style='light'
      backgroundColor='#161622'
      /> */}
    </Stack>
  )
}
export default AuthLayout