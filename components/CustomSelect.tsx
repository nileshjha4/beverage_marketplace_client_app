import { View, Text} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const CustomSelect = ({title, items, placeholder, handleChange, otherStyles, label, ...props}) => {
  return (
     <View className={`space-y-2 ${otherStyles}`}>
      {title && <Text className="text-base text-black font-pmedium px-2">{title}</Text>}
      <View className="border border-slate-400 rounded-2xl">
      <RNPickerSelect
        onValueChange={handleChange}
        items={items}
        placeholder={{label:label}}
        />
        </View>
    </View>
  )
}
export default CustomSelect