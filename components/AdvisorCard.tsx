import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const AdvisorCard = ({ name, image, countryIcon, languages, career }) => {
  return (
    <View className="border border-[#ABABAB] bg-[#F3F3F3] p-4 mb-4 rounded-lg">
      <View className="flex-row items-center mb-6">
        <Image
          source={{ uri: image }}
          className="w-12 h-12 rounded-full"
          style={{ resizeMode: 'cover' }}
        />
        <Text className="text-xl font-bold ml-4">{name}</Text>
        <View className="flex-row items-center ml-4">
        {countryIcon}
        </View>
      </View>
      <View className="mb-4">
        <View className="bg-[#D1D9DD] rounded-lg p-3 flex-row items-center mb-2">
          <FontAwesome name="language" size={16} color="#000" />
          <Text className="ml-1 text-sm">  Speaks: {languages}</Text>
        </View>
        <View className="bg-[#D1D9DD] rounded-lg p-3 flex-row items-center">
          <MaterialCommunityIcons name="briefcase" size={16} color="#000" />
          <Text className="ml-1 text-sm">  {career}</Text>
        </View>
      </View>
      <TouchableOpacity
        className="bg-[#0B60A3] p-4 rounded-xl items-center"
        onPress={() => alert('Schedule Meeting')}
      >
        <Text className="text-white">Schedule Meeting</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AdvisorCard;