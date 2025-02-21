import { Alert, Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from "@/constants/images";
import { useState } from 'react';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';
import { Sign_Up2 } from '@/logic/sign-up2';
import { useGlobalContext } from "@/context/GlobalProvider";
import FormField from '@/components/FormField';

const SignUp = () => {
  const { token, setGrades } = useGlobalContext();
  const [form, setForm] = useState({
    pocname: "",
    poccontact: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    setIsSubmitting(true);
    const response = await Sign_Up2(form, token);

    if (response?.success) {
      Alert.alert("Success", "You have successfully registered");
      setGrades(response.data.result);
      router.push('/home');
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
            source={images.personal2}
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
          />
          <View className="flex-1 ml-4">
            <Text className="text-[#000000] text-[20px] font-medium text-center">
              POC Details
            </Text>
          </View>
        </View>

        {/* Form Fields */}
        <FormField
          title="POC Name"
          value={form?.pocname}
          handleChangeText={(e) => setForm({ ...form, pocname: e })}
          otherStyles="mt-4"
          label="POC Name"
        />
        <FormField
          title="POC Number"
          value={form?.poccontact}
          handleChangeText={(e) => setForm({ ...form, poccontact: e })}
          otherStyles="mt-4"
          label="POC Number"
          keyboardType="phone-pad"
        />

        {/* Submit Button */}
        <CustomButton
          title="Submit"
          isLoading={isSubmitting}
          handlePress={submit}
          containerStyle="mt-6"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;