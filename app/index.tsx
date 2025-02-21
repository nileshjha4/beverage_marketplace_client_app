import { Text, View, ScrollView, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { router, Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images"
import CustomButton from "@/components/CustomButton";
import {useGlobalContext} from "@/context/GlobalProvider"

export default function Index() {
  const {isLoading, isLoggedIn} = useGlobalContext();
  
  if(!isLoading && isLoggedIn){
    return <Redirect href="/home" />
  }

  return (
    <SafeAreaView className="bg-slate-50 h-full">
      <ScrollView contentContainerStyle={{
        height: '100%'
      }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            resizeMode="contain"
            alt="beverage logo"
            className="w-[275px] h-[207px]"
          />
          <Text className="text-3xl text-center font-bold">Welcome to Beverage MarketPlace</Text>
          <Text className="text-lg text-justify font-normal">
          A dynamic platform connecting beverage enthusiasts with a curated selection of unique drinks from global brands and local artisans. Discover, compare, and purchase beverages that suit your taste.
          </Text>
          <CustomButton
          title="Get Started"
          handlePress={()=>{
            router.push("/sign-in")
          }}
          containerStyle="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
