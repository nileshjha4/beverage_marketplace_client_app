import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { FontAwesome } from '@expo/vector-icons';
import tailwind from 'tailwind-rn';

const MealPlanScreen = () => {
  const tableHead = ['Meal Plan Name', 'Costs per Year', 'Menu'];
  const tableData = [
    ['Plan A', '$2,500', <FontAwesome name="cutlery" size={16} color="green" />],
    ['Plan B', '$3,000', <FontAwesome name="cutlery" size={16} color="green" />],
    ['Plan C', '$3,500', <FontAwesome name="cutlery" size={16} color="green" />],
  ];

  return (
    <ScrollView style={tailwind('flex-1 bg-gray-100')}>
      {/* Meal Plan Options */}
      <View style={tailwind('mt-5 px-4')}>
        <Text style={tailwind('text-2xl font-bold mb-4')}>Meal Plan Options</Text>
        <View style={tailwind('bg-white rounded-lg shadow-md')}>
          <Table borderStyle={tailwind('border border-gray-200')}>
            <Row data={tableHead} style={tailwind('bg-gray-100 py-2')} textStyle={tailwind('text-center font-semibold')} />
            <Rows data={tableData} textStyle={tailwind('text-center py-2')} />
          </Table>
        </View>
      </View>

      {/* Sample Menus */}
      <View style={tailwind('mt-8 px-4')}>
        <Text style={tailwind('text-xl font-bold mb-4')}>Sample Menus</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tailwind('flex-row')}>
          <View style={tailwind('mr-4')}>
            <Image
              source={{ uri: 'https://example.com/spaghetti.jpg' }} // Replace with actual image URL
              style={tailwind('w-32 h-32 rounded-lg')}
            />
            <Text style={tailwind('text-center mt-2')}>Spaghetti Bolognese</Text>
          </View>
          <View style={tailwind('mr-4')}>
            <Image
              source={{ uri: 'https://example.com/salad.jpg' }} // Replace with actual image URL
              style={tailwind('w-32 h-32 rounded-lg')}
            />
            <Text style={tailwind('text-center mt-2')}>Garden Salad</Text>
          </View>
          <View style={tailwind('mr-4')}>
            <Image
              source={{ uri: 'https://example.com/chicken.jpg' }} // Replace with actual image URL
              style={tailwind('w-32 h-32 rounded-lg')}
            />
            <Text style={tailwind('text-center mt-2')}>Grilled Chicken</Text>
          </View>
        </ScrollView>
      </View>

      {/* Vegetarian and Non-Vegetarian Dishes */}
      <View style={tailwind('mt-8 px-4')}>
        <Text style={tailwind('text-xl font-bold')}>Vegetarian Dishes:</Text>
        <Text style={tailwind('mt-2')}>• Oatmeal with Fruits</Text>
        <Text style={tailwind('mt-2')}>• Hummus and Veggies</Text>
        <Text style={tailwind('mt-2')}>• Green Smoothie</Text>

        <Text style={tailwind('text-xl font-bold mt-6')}>Non-Vegetarian Dishes:</Text>
        <Text style={tailwind('mt-2')}>• Grilled Chicken Salad</Text>
        <Text style={tailwind('mt-2')}>• Beef Stir Fry</Text>
      </View>
    </ScrollView>
  );
};

export default MealPlanScreen;