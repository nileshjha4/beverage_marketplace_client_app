import { Alert, Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/FormField'
import { useState } from 'react'
import CustomButton from '@/components/CustomButton'
import { Link, router, Redirect } from 'expo-router'
import { Sign_In } from '@/logic/sign-in'
import {useGlobalContext} from "@/context/GlobalProvider"
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = () => {
    const {isLoading, isLoggedIn, setToken, setIsLoggedIn } = useGlobalContext();
  
  if(!isLoading && isLoggedIn){
    return <Redirect href="/home" />
  }
  const [form, setForm]=useState({
    email: '',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] =useState(false);

  const submit=async()=>{
    setIsSubmitting(true)
    const response = await Sign_In(form)
    if(response?.success){
      console.log(response?.data?.token)
      await AsyncStorage.setItem('depaulToken', response.data.token);
      setToken(()=>response.data.token)
      setIsLoggedIn(()=>true)
      router.push('/home')       
    }else if(response.error){
      Alert.alert(
        'Error',
        response.message,
        )
    }
    setIsSubmitting(false)
  }
  return (
    <SafeAreaView className="bg-slate-50 h-full px-4">
      <ScrollView className='mt-24'>
        <View className="w-full justify-center items-center px-4">
          {/* <Image source={images.not}
          className="w-[291px] h-[128px] mt-4 mb-2"
          /> */}
          <Text className="text-center font-bold text-[28px]">Welcome Back!</Text>
          <Text className="text-center font-medium text-[16px]">Let’s get you started</Text>
        </View>
        <FormField
        title="Email"
        value={form.email}
        placeholder="Enter your email"
        handleChangeText={(e)=>{
          setForm({...form, email: e})
        }}
        otherStyles="mt-7"
        keyboardType="email-address"
        />
        <FormField
        title="Password"
        value={form.password}
        placeholder="Enter your password"
        handleChangeText={(e)=>{
          setForm({...form, password: e})
        }}
        otherStyles="mt-7"
        />
        <Text className="text-[#1C1C1C] text-[14px] text-medium text-right">forgot password?</Text>
        <CustomButton 
        title="Sign In"
        handlePress={submit}
        containerStyle="mt-7"
        isLoading={isSubmitting}
        />
        <View className="justify-center items-center pt-4">
          <Text>Don’t have an account? <Link 
          href='/sign-up'
          className='text-blue-700 font-bold'
          >Sign Up</Link></Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default SignIn