import { View, Text, Image, TouchableOpacity } from 'react-native'
import images from "@/constants/images"
import { router } from 'expo-router'
const CustomReport = ({program, specialization, degree, reportId, otherStyle}) => {
  return (
    <View className={`${otherStyle} flex flex-row justify-between items-center px-2 py-2 mt-3 mb-3 rounded-xl shadow-sm`}>
          <Image
          source={images.report}
          />
          <View className="">
            <Text className="text-[13px] font-medium w-72">{program}</Text>
            <Text className="text-[13px] font-pmedium text-left">{specialization}</Text>
          </View>
          <TouchableOpacity
          onPress={()=>{
            router.push({
              pathname: '/detailreport',
              params: {
                reportId
              }
            })
          }}
          >
            <Image
            source={images.arrow}
            />
          </TouchableOpacity>
    </View>
  )
}
export default CustomReport