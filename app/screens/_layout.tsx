import { Stack } from 'expo-router'
const ScreensLayout = () => {
  return (
    <Stack>
      <Stack.Screen
      name='applychat'
      options={{
        headerShown: false,
      }} 
      />
      <Stack.Screen
      name='chat'
      options={{
        headerShown: false,
      }} 
      />
    </Stack>
  )
}
export default ScreensLayout