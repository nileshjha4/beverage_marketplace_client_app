import React from "react";
import { View, Text, ScrollView } from "react-native";

const data =  {
  houses: [
      {
          "name": "On-Campus Accommodation",
          "type": "Dormitory",
          "cost": "RM395 - RM750 per month"
      },
      {
          "name": "Taman Tasik Semenyih",
          "type": "Terrace-linked houses and bungalows",
          "cost": "RM300 - RM900 per month"
      },
      {
          "name": "UniVillage",
          "type": "Condominium",
          "cost": "RM300 - RM900 per month"
      },
      {
          "name": "Tetris Apartments",
          "type": "Walk-up flats",
          "cost": "RM300 - RM900 per month"
      }
  ],
  meals: [
      {
          "meal_plan": "Basic Meal Plan",
          "cost_per_year": 600
      }
  ],
  daily_meals: [
      {
          "meal_type": "Breakfast",
          "item": "Local breakfast (e.g., Nasi Lemak, Roti Canai)",
          "cost": "RM6"
      },
      {
          "meal_type": "Lunch",
          "item": "Meal at a local cafe/stall",
          "cost": "RM6"
      },
      {
          "meal_type": "Dinner",
          "item": "Meal at a fast food joint",
          "cost": "RM8 - RM18"
      },
      {
          "meal_type": "Dinner",
          "item": "Meal at an upscale restaurant",
          "cost": "RM20++"
      }
  ]
}

const HousingOptions = ({ house }) => {
  return (
    <ScrollView className="min-h-screen p-4 bg-white">
      <View className="max-w-full mx-auto">

        {/* Header */}
        <Text className="text-xl font-bold mb-6 text-blue-900">
          Housing Options for Students at Nottinngham University.
        </Text>

        {/* Housing Options Table */}
        <View className="mb-8">
          <Text className="text-xl font-semibold mb-4 text-blue-900">Housing Options Table</Text>
          <View className="space-y-4">
            {data?.houses.map((row, index) => (
              <View key={index} className="bg-blue-100 p-4 rounded-lg shadow-md">
                <Text className="font-semibold text-lg text-blue-800">{row.name}</Text>
                <Text className="text-gray-600 mt-1">Type: {row.type}</Text>
                <Text className="text-gray-600">Costs per Year: {row.cost}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Meal Plan Options */}
        <View className="mb-8">
          <Text className="text-xl font-semibold mb-4 text-blue-900">Meal Plan Options</Text>
          <View className="space-y-4">
            {data?.meals.map((row, index) => (
              <View key={index} className="bg-blue-100 p-4 rounded-lg shadow-md">
                <Text className="font-semibold text-lg text-blue-800">{row.meal_plan}</Text>
                <Text className="text-gray-600 mt-1">Costs per month: {row.cost_per_year}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Daily Food Menu */}
        <View className="mb-8">
          <Text className="text-xl font-semibold mb-4 text-blue-900">Daily Food Menu</Text>
          <View className="space-y-4">
            {data?.daily_meals.map((row, index) => (
              <View key={index} className="bg-blue-100 p-4 rounded-lg shadow-md">
                <Text className="font-semibold text-lg text-blue-800">{row.meal_type}</Text>
                <Text className="text-gray-600 mt-1">Item: {row.item}</Text>
                <Text className="text-gray-600 mt-1">Price: {row.cost}</Text>
              </View>
            ))}
          </View>
        </View>

      </View>
    </ScrollView>
  );
};

export default HousingOptions;