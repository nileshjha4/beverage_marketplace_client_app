import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from "@/constants/images";
import { useState } from 'react';
import CustomButton from '@/components/CustomButton';
import FormField from '@/components/FormField';
import { Sign_Up1 } from '@/logic/sign-up1';
import { Alert } from 'react-native';
import { useGlobalContext } from "@/context/GlobalProvider";
import { router } from 'expo-router';

const SignUp = () => {
  const { token, setAcademic } = useGlobalContext();
  const [form, setForm] = useState({
    line1: '',
    line2: '',
    state: '',
    pincode: '',
    gst: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    setIsSubmitting(true);
    const response = await Sign_Up1(form, token);
    if (response?.success) {
      setAcademic(response.data.result);
      router.push('/sign-up2');
    } else {
      Alert.alert('Error', response.error);
    }
    setIsSubmitting(false);
  };

  return (
    <SafeAreaView className="bg-slate-50 flex-1">
      <ScrollView contentContainerStyle={{ padding: 16, flexGrow: 1 }}>
        {/* Header Section */}
        <View className="flex flex-row justify-between items-center mt-4">
          <Image
            source={images.personal1}
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
          />
          <View className="flex-1 ml-4">
            <Text className="text-[#000000] text-[20px] font-medium text-center">
              Address Details
            </Text>
            <Text className="text-[#7B7B7B] text-[14px] font-normal text-center">
              Next: POC Details
            </Text>
          </View>
        </View>

        {/* Form Section */}
        <Text className="text-lg mt-6 font-medium">Full Address</Text>
        <FormField
          title="Address Line 1"
          value={form.line1}
          handleChangeText={(e) => setForm({ ...form, line1: e })}
          otherStyles="mt-4"
          label="Address Line 1"
        />
        <FormField
          title="Address Line 2"
          value={form.line2}
          handleChangeText={(e) => setForm({ ...form, line2: e })}
          otherStyles="mt-4"
          label="Address Line 2"
        />
        <FormField
          title="State"
          value={form.state}
          handleChangeText={(e) => setForm({ ...form, state: e })}
          otherStyles="mt-4"
          label="State"
        />
        <FormField
          title="Pincode"
          value={form.pincode}
          handleChangeText={(e) => setForm({ ...form, pincode: e })}
          otherStyles="mt-4"
          label="Pincode"
          keyboardType="numeric"
        />

        <Text className="text-lg mt-6 font-medium">GST Details</Text>
        <FormField
          title="GST Number"
          value={form.gst}
          handleChangeText={(e) => setForm({ ...form, gst: e })}
          otherStyles="mt-4"
          label="GST Number"
        />

        {/* Submit Button */}
        <CustomButton
          title="Next"
          handlePress={submit}
          containerStyle="mt-6"
          isLoading={isSubmitting}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;