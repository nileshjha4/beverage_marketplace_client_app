import { Image, ScrollView, Text, View, Dimensions, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import FormField from '@/components/FormField';
import { useState } from 'react';
import CustomButton from '@/components/CustomButton';
import CustomSelect from '@/components/CustomSelect';
import data from '@/data/data';
import { Sign_Up } from '@/logic/sign-up';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useGlobalContext } from '@/context/GlobalProvider';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');

const SignUp = () => {
  const { setIsLoggedIn, setToken, setUser } = useGlobalContext();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    number: '',
    gender: '',
    aadharcard: '',
    pancard: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    console.log(form);
    setIsSubmitting(true);
    const response = await Sign_Up(form);
    if (response.success) {
      await AsyncStorage.setItem('depaulToken', response.data.token);
      setToken(response.data.token);
      setIsLoggedIn(true);
      setUser(response.data.result);
      setIsSubmitting(false);
      router.push('/sign-up1');
    } else {
      setIsSubmitting(false);
      Alert.alert('Error', response.error);
    }
  };

  return (
    <SafeAreaView className="bg-slate-50 flex-1">
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 8 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex flex-row justify-between items-center mt-4">
          <Image
            source={images.personal}
            style={{ width: width * 0.3, height: width * 0.3 }}
          />
          <View style={{ flex: 1, marginLeft: 16 }}>
            <Text className="text-black text-xl font-medium">Personal Details</Text>
            <Text className="text-gray-500 text-base">Next: Address Details</Text>
          </View>
        </View>

        <FormField
          title="Name"
          value={form.name}
          handleChangeText={(e) => setForm({ ...form, name: e })}
          otherStyles="mt-6"
          label="Name"
        />
        <FormField
          title="Email"
          value={form.email}
          handleChangeText={(e) => setForm({ ...form, email: e })}
          otherStyles="mt-7"
          keyboardType="email-address"
          label="Email"
        />
        <FormField
          title="Password"
          value={form.password}
          handleChangeText={(e) => setForm({ ...form, password: e })}
          otherStyles="mt-7"
          label="Password"
          secureTextEntry={true}
        />
        <FormField
          title="Number"
          value={form.number}
          handleChangeText={(e) => setForm({ ...form, number: e })}
          otherStyles="mt-7"
          keyboardType="phone-pad"
          label="Number"
        />

        <CustomSelect
          title="Gender"
          items={data?.gender}
          handleChange={(e) => setForm({ ...form, gender: e })}
          otherStyles="mt-7"
          label="Select Gender"
        />

        <Text className="text-lg mt-5 font-medium">Verification Information</Text>

        <FormField
          title="Aadhar Card"
          value={form.aadharcard}
          handleChangeText={(e) => setForm({ ...form, aadharcard: e })}
          otherStyles="mt-7"
          label="Aadhar Card"
        />
        <FormField
          title="Pan Card"
          value={form.pancard}
          handleChangeText={(e) => setForm({ ...form, pancard: e })}
          otherStyles="mt-7"
          label="Pan Card"
        />

        <CustomButton
          title="Next"
          handlePress={submit}
          containerStyle="mt-7 mb-5"
          isLoading={isSubmitting}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;