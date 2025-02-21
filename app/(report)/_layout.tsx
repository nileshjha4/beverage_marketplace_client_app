import { Stack } from 'expo-router'
const ReportLayout = () => {
  return (
    <Stack>
      <Stack.Screen
      name='detailreport'
      options={{
        headerShown: false,
      }} 
      />
      <Stack.Screen
      name='fullreport'
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
export default ReportLayout