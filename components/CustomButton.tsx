import { TouchableOpacity, Text } from 'react-native'
const CustomButton = ({title, handlePress, containerStyle, isLoading}) => {
  return (
    <TouchableOpacity
    onPress={handlePress}
    activeOpacity={0.7}
    className={`bg-[#0B60A3] min-h-[56px] items-center justify-center rounded-xl ${containerStyle} ${isLoading? 'opacity-50': ''}`}
    disabled={isLoading}
    >
        <Text className="text-[#F0F0F0] text-[18px] font-medium">{title}</Text>
    </TouchableOpacity>
  )
}
export default CustomButton