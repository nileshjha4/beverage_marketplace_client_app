import React, { useEffect, useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Image, Text } from 'react-native';
import PersonalForm from '@/components/PersonalForm';
import InterestsForm from '@/components/InterestsForm';
import GradesForm from '@/components/GradesForm';
import {useGlobalContext} from "@/context/GlobalProvider"
import { useQuery } from '@tanstack/react-query';
import { GetProfile } from '@/logic/get-personal';

const Tab = createMaterialTopTabNavigator();

const ProfileTabs = ({ personalData , token }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 10 },
        tabBarStyle: { shadowColor: 'white' },
      }}
    >
      <Tab.Screen name="Personal">
        {() => <PersonalForm data={personalData} token={token} />}
      </Tab.Screen>
      <Tab.Screen name="Address">
        {() => <InterestsForm data={personalData} token={token} />}
      </Tab.Screen>
      <Tab.Screen name="POC">
        {() => <GradesForm data={personalData} token={token} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

const Profile = () => {
  const {token} = useGlobalContext()

  const { data: personalData, isLoading: isLoadingPersonalData } = useQuery({
    queryFn: () => GetProfile(token),
    queryKey: ["profile"],
  });

  if(isLoadingPersonalData){
    return <View><Text>Loading...</Text></View>
  }

  return (
    <View className="flex-1 bg-white">
      <View className="bg-[#134685] p-4 items-center">
        <Image
          source={{ uri: 'https://s3-alpha-sig.figma.com/img/f915/f559/605acbcc2cce18fffbdfd63b5a4daac0?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VAMCG44etFahUwBNcSSlVcgqizFFzG0HvhUTDXstNEtgYqzd1kBcFR3NdIw4l5mpZV5ytI4Ey7imswsaQmbhKQLFnSOSZCg6GqA2loAbwBhol3w07zizZcSmE11WidsjmN8iqhgmzBcTaTohRV~WC3Zoi~qW2UTy3PAX5WEtM5JbZv0W-Q0LbwtaexXGoHjoDS5tjZBnR4tiQm6OKwrqd6GpAbH9wfnKzgnu6FVNKr6xmvPbILd5nqWTHGtL3HnounUhDyPVfJXp2r4ePW7FlFAcvJZAYbsiUF~4LXhxny9N2OKgeHAlL8d9vIOCtksuy-mkaqsKY9rTL8kSgrE~BA__' }}
          className="w-32 h-32"
          style={{ resizeMode: 'contain' }}
        />
      </View>
      <View className="ml-8 -mt-8">
        <Image
          source={{ uri: 'https://s3-alpha-sig.figma.com/img/ad61/8192/b96051b7a065c27cb9240a060e8c6127?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HZbHt6wh5DfH4rBTe2-5VF4Fy87wnmM8DjeV3l5Lc4K1AHCimGuMjiH~EzCGRxziF7CTsFVn5rIEyDNbGb3j60RxAxc~RyhyDe-aP4lIknfd-3oQ2j8iQeC1tAdhif2YnflNOOL-0pbt3lRrJwFPHvtjyiDezt4H0svLB4DOvrAx09eUr1kI6mBUwdu5ddIB65m1wwGZ8wpVkvljz~i~qotK9bA-WqSQVo8AwhObv29M7GnNtyhpsgOsVeW1yixwtbryKN7x3tZoP5s8gN5R0ZaBGSJmXpYqGSXu4oFbANpDAmYC1ClbFUYFlLHJmmfecTeQ2KPwQQ9gtknXhyUycQ__' }}
          className="w-16 h-16 rounded-full"
          style={{
            resizeMode: 'cover',
            borderWidth: 4,
            borderColor: 'white',
          }}
        />
      </View>
      <ProfileTabs
        personalData={personalData?.data}
        token={token}
      />
    </View>
  );
};

export default Profile;