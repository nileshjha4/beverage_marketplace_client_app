import { useState } from 'react'
import { View, TextInput, TouchableOpacity, Image, Text } from 'react-native'
import icons from "@/constants/icons"

const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
    const [showPassword, setShowPassword]=useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
        {props.label && <Text className="text-base text-black font-pmedium px-2">{props.label}</Text>}
      <View className="w-full border border-slate-400 h-16 rounded-2xl items-center flex-row">
        <TextInput
        className="flex-1 text-black font-psemibold text-base px-4"
        placeholder={placeholder}
        placeholderTextColor="#636363"
        value={value}
        onChangeText={handleChangeText}
        secureTextEntry={title === 'Password' && !showPassword}
        {...(props.onHandleFocus && { onFocus: props.onHandleFocus })}
        />
        {title==="Password" && 
        <TouchableOpacity
        onPress={()=>setShowPassword(!showPassword)}
        >
            <Image
            source={showPassword ? icons.eye : icons.eyeHide}
            className="w-6 h-6 px-6"
            resizeMode='contain'
            />
        </TouchableOpacity>
        }
      </View>
    </View>
  )
}
export default FormField