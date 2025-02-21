import React,{useState} from 'react';
import { View, Text, ScrollView } from 'react-native';

const Academic = ({ academic }) => {
  return (
    <ScrollView className="p-4 bg-white">
      <View className="max-w-full mx-auto">

        {/* University Name */}
        <Text className="text-xl font-bold mb-4 text-center text-blue-900">{academic?.university}</Text>

        {/* Course Title */}
        <Text className="text-lg font-semibold mb-4 text-center text-gray-700">{academic?.course_title}</Text>

        {/* Brief Description */}
        <Text className="mb-6 text-gray-600 text-base leading-relaxed text-justify">
          {academic?.brief_description}
        </Text>

        {/* Compulsory Courses */}
        {academic?.compulsory_courses?.map((year, index) => (
          <View key={index} className="mb-8">
            <Text className="text-xl font-semibold text-blue-800">
              {year.year.toUpperCase()}
            </Text>
            <View className="flex flex-col gap-4">
              {year?.courses?.map((semester, index) => (
                <View key={index} className="bg-blue-100 rounded-lg shadow-md pl-4 pr-4">
                  <Text className="text-lg font-semibold text-blue-700">{semester?.semester_name}</Text>

                  <View key={index} className="mb-4">
                    <Text className="text-base font-bold text-gray-800">{semester?.name}</Text>
                    <Text className="text-sm text-gray-600 leading-snug">
                      {semester?.description}
                    </Text>

                    {/* Skills Section */}
                    <Text className="font-bold text-base mt-2 text-blue-800">Skills Acquired:</Text>
                    <View>
                      {semester?.skills?.map((item, idx) => (
                        <Text key={idx} className="text-gray-600 text-sm">
                          • {item}
                        </Text>
                      ))}
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        ))}

        {/* Elective Courses */}
        <Text className="text-xl font-semibold mb-4 text-blue-900">Elective Courses</Text>
        {academic?.elective_courses?.map((course, index) => (
          <View key={index} className="mb-6 bg-blue-100 rounded-lg shadow-md p-4">
            <View key={index} className="mb-4">
              <Text className="text-base font-bold text-gray-800">{course?.name}</Text>
              <Text className="text-sm text-gray-600 leading-snug">{course?.description}</Text>

              {/* Skills Section */}
              <Text className="font-bold text-base mt-2 text-blue-800">Skills Acquired:</Text>
              <View>
                {course?.skills?.map((item, idx) => (
                  <Text key={idx} className="text-gray-600 text-sm">
                    • {item}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Academic;