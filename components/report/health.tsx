import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const data = {
  crime: "The area surrounding the University of Nottingham Malaysia is generally considered safe. However, like any urban environment, students are encouraged to remain vigilant and aware of their surroundings, especially during late hours.",
  safety: [
      "Always travel in groups, especially at night.",
      "Avoid displaying valuable items in public.",
      "Use well-lit and populated routes when walking.",
      "Be cautious when using public transport and ensure your belongings are secure."
  ],
  emergency: [
      {
          "name": "Police",
          "number": "+6 (03) 8924 8000"
      },
      {
          "name": "Fire Department",
          "number": "+6 (03) 8924 8001"
      },
      {
          "name": "Ambulance",
          "number": "+6 (03) 8924 8002"
      }
  ],
  conflict_avoidance: [
      "Respect local customs and cultural practices.",
      "Avoid engaging in heated discussions or arguments.",
      "If confronted, remain calm and seek to de-escalate the situation.",
      "Know the locations of safe spaces on campus and in the community."
  ],
  additional_important_information: [
      "The university provides a health clinic for minor health issues, located on the first floor of the Student Association Building.",
      "Students are required to have medical and health insurance, which can be procured through the university or approved providers.",
      "Regular safety workshops and seminars are held to educate students on personal safety and emergency preparedness."
  ]
}

const Health = ({ health }) => {
  
  return (
    <ScrollView className="p-6">
      {/* Header */}
      <Text className="text-xl font-bold text-black mb-6">
        Safety Instructions in University of Nottingham, Malaysia.
      </Text>

      {/* Crime Rates */}
      <View className="bg-blue-100 p-6 rounded-lg mb-6">
        <Text className="text-xl font-semibold flex items-center mb-4">
          <Text className="text-2xl mr-2">📊</Text> Crime Rates
        </Text>
        <Text className="text-gray-700">
          {data?.crime}
        </Text>
      </View>

      {/* Staying Safe */}
      <View className="bg-blue-100 p-6 rounded-lg mb-6">
        <Text className="text-xl font-semibold flex items-center mb-4">
          <Text className="text-2xl mr-2">🛡</Text> Staying Safe
        </Text>
        {data?.safety.map((safe, index) => (
          <Text key={index} className="text-gray-700">
            {safe}
          </Text>
        ))}
      </View>

      {/* Emergency Contact Numbers */}
      <View className="bg-blue-100 p-6 rounded-lg mb-6">
        <Text className="text-xl font-semibold flex items-center mb-4">
          <Text className="text-2xl mr-2">📞</Text> Emergency Contact Numbers
        </Text>
        {data?.emergency.map((item, index) => (
          <Text key={index} className="text-gray-700">
            {item.name} : {item.number}
          </Text>
        ))}
      </View>

      {/* Conflict Avoidance */}
      <View className="bg-blue-100 p-6 rounded-lg mb-6">
        <Text className="text-xl font-semibold flex items-center mb-4">
          <Text className="text-2xl mr-2">⚖</Text> Conflict Avoidance
        </Text>
        {data?.conflict_avoidance.map((safe, index) => (
          <Text key={index} className="text-gray-700">
            {safe}
          </Text>
        ))}
      </View>

      {/* Additional Important Information */}
      <View className="bg-blue-100 p-6 rounded-lg mb-6">
        <Text className="text-xl font-semibold flex items-center mb-4">
          <Text className="text-2xl mr-2"></Text> Additional Important Information
        </Text>
        {data?.additional_important_information.map((safe, index) => (
          <Text key={index} className="text-gray-700">
            {safe}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default Health;