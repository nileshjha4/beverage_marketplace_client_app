import { View, TextInput, Text } from 'react-native'

const FormField = ({title, placeholder, handleChangeText, otherStyles, ...props}) => {
  return (
    <View className={`space-y-2 ${otherStyles}`}>
        {props.label && <Text className="text-base text-black font-pmedium px-2">{props.label}</Text>}
      <View className="w-full border border-slate-400 h-16 rounded-2xl items-center flex-row">
        <TextInput
        className="flex-1 text-black font-psemibold text-base px-4"
        placeholder={placeholder}
        keyboardType="numeric"
        placeholderTextColor="#636363"
        onChangeText={handleChangeText}
        />
      </View>
    </View>
  )
}
export default FormField