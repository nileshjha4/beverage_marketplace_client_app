import React from "react";
import { View, Text, ScrollView } from "react-native";

const ApplicationInfo = ({ application }) => {
  return (
    <ScrollView className="min-h-screen p-4 bg-white">
      <View className="max-w-full mx-auto">

        {/* Application Process Heading */}
        <Text className="text-xl font-bold mb-4 text-center text-blue-900">
          Application process for {application?.university}, {application?.course_title}
        </Text>

        {/* Key Dates Section */}
        <View className="mb-8">
          <Text className="text-xl font-semibold mb-4 flex items-center text-blue-800">
            📅 Key Dates
          </Text>
          <View className="space-y-4">
            {application?.application_deadlines?.map((date, index) => (
              <View key={index} className="bg-blue-100 rounded-lg shadow-md p-4">
                <Text className="text-gray-700">
                  <Text className="font-bold">Name:</Text> {date?.type}
                </Text>
                <Text className="text-gray-700">
                  <Text className="font-bold">Last Date:</Text> {date?.date}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Step-by-Step Process Section */}
        <View className="mb-8">
          <Text className="text-xl font-semibold mb-4 flex items-center text-blue-800">
            📝 Step-by-Step Process
          </Text>
          <View className="space-y-4">
            {application?.application_process?.map((step, index) => (
              <View key={index} className="bg-blue-50 rounded-lg shadow-sm p-4">
                <Text className="text-gray-700">{step}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Documents Checklist Section */}
        <View className="mb-8">
          <Text className="text-xl font-semibold mb-4 flex items-center text-blue-800">
            📋 Documents Checklist
          </Text>
          <View className="space-y-4">
            {application?.required_documents?.map((doc, index) => (
              <View key={index} className="bg-blue-100 rounded-lg shadow-md p-4">
                <Text className="text-gray-700">
                  <Text className="font-bold">Name:</Text> {doc?.name}
                </Text>
                <Text className="text-gray-700">
                  <Text className="font-bold">Description:</Text> {doc?.description}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Additional Requirements Section */}
        <View className="mb-8">
          <Text className="text-xl font-semibold mb-4 flex items-center text-blue-800">
            💵 Additional Requirements
          </Text>
          <Text className="text-gray-700 bg-blue-50 rounded-lg p-4 shadow-sm">
            {application?.additional_requirements}
          </Text>
        </View>

        {/* Scholarship Information Section */}
      </View>
    </ScrollView>
  );
};

export default ApplicationInfo;