import React from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';

const CareerCenterServices = ({ career }) => {
  const renderEmploymentItem = ({ item }) => (
    <View className="flex-row border-b border-gray-200 py-4 px-4">
      <Text className="w-1/2 text-left text-gray-700">{item.name}</Text>
      <Text className="w-1/2 text-left text-gray-700">{item.industry_type}</Text>
    </View>
  );

  const renderCareerItem = ({ item }) => (
    <View className="flex-row border-b border-gray-200 py-4 px-4">
      <Text className="w-1/4 text-left text-gray-700">{item.job_roles}</Text>
      <Text className="w-1/4 text-left text-gray-700">{item.job_description}</Text>
      <Text className="w-1/4 text-left text-gray-700">{item.average_starting_salary}</Text>
      <Text className="w-1/4 text-left text-gray-700">{item.average_internship_hourly_rate}</Text>
    </View>
  );

  return (
    <ScrollView className="flex-1 p-4 bg-white">
      {/* Header */}
      <Text className="text-lg font-bold mb-6 text-center">
        Career Center Services for {career?.university}, {career?.course_title}
      </Text>

      {/* Employment Partners Section */}
      <View className="mb-8">
        <Text className="text-lg font-semibold mb-4">Leading Employment Partners by Industry</Text>
        <ScrollView horizontal className="border border-gray-300 rounded-lg overflow-hidden">
          <View>
            {/* Table Header */}
            <View className="flex-row bg-gray-200 p-2">
              <Text className="w-1/2 text-left font-semibold text-gray-800">Industry Name</Text>
              <Text className="w-1/2 text-left font-semibold text-gray-800">Industry Type</Text>
            </View>
            {/* Table Body */}
            <FlatList
              data={career?.employment}
              renderItem={renderEmploymentItem}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 10 }} // Optional padding
            />
          </View>
        </ScrollView>
      </View>

      {/* Career Opportunities Section */}
      <View className="mb-8">
        <Text className="text-xl font-semibold mb-4">Career Opportunities</Text>
        <ScrollView horizontal className="border border-gray-300 rounded-lg overflow-hidden">
          <View>
            {/* Table Header */}
            <View className="flex-row bg-gray-200 p-2">
              <Text className="w-1/4 text-left font-semibold text-gray-800">Job Roles</Text>
              <Text className="w-1/4 text-left font-semibold text-gray-800">Job Description</Text>
              <Text className="w-1/4 text-left font-semibold text-gray-800">Average Starting Salary</Text>
              <Text className="w-1/4 text-left font-semibold text-gray-800">Average Internship Rates/Hour</Text>
            </View>
            {/* Table Body */}
            <FlatList
              data={career?.career_opportunities}
              renderItem={renderCareerItem}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 10 }} // Optional padding
            />
          </View>
        </ScrollView>
      </View>

      {/* Work Visa Rights and Process Section */}
      <View className="mb-8">
        <Text className="text-xl font-semibold mb-4">Visa Process for International Students</Text>

        {/* Application for Student Visa */}
        <View className="mb-4">
          <Text className="text-xl font-semibold mb-2">Application for Student Visa</Text>
          <Text className="text-gray-700 mb-2">
            <Text className="font-semibold">Eligibility:</Text> Students must have received an offer of a place on a course at the University of Nottingham, Malaysia.
          </Text>
          <Text className="text-gray-700 font-semibold mb-2">Documents Required:</Text>
          <View className="space-y-2 pl-6">
            {['Valid passport', 'Confirmation of Acceptance for Studies (CAS) from the university', 'Financial evidence showing sufficient funds to cover tuition fees and living costs', 'English language proficiency proof (e.g., IELTS)', 'Health Insurance (if applicable)'].map((doc, index) => (
              <Text key={index} className="text-gray-700">- {doc}</Text>
            ))}
          </View>
          <Text className="text-gray-700 font-semibold mt-4 mb-2">Process:</Text>
          <View className="space-y-2 pl-6">
            <Text className="list-decimal text-gray-700">1. Complete the online visa application form.</Text>
            <Text className="list-decimal text-gray-700">2. Pay the visa application fee.</Text>
            <Text className="list-decimal text-gray-700">3. Schedule and attend a biometric appointment.</Text>
            <Text className="list-decimal text-gray-700">4. Submit supporting documents to the relevant visa application center.</Text>
          </View>
        </View>

        {/* Working Rights During Studies */}
        <View className="mb-4">
          <Text className="text-xl font-semibold mb-2">Working Rights During Studies</Text>
          <View className="space-y-2 pl-6">
            <Text className="text-gray-700">- <Text className="font-semibold">Part-Time Work:</Text> International students can work up to 20 hours per week during term time and full-time during vacation periods.</Text>
            <Text className="text-gray-700">- <Text className="font-semibold">On-Campus Work:</Text> Students may work on campus without restrictions, as long as it does not exceed the allowed hours.</Text>
          </View>
        </View>

        {/* Working Rights After Graduation */}
        <View className="mb-4">
          <Text className="text-xl font-semibold mb-2">Working Rights After Graduation</Text>
          <View className="space-y-2 pl-6">
            <Text className="text-gray-700">- <Text className="font-semibold">Post-Study Work Visa (Graduate Route):</Text> International students may apply for a post-study work visa, allowing them to stay in Malaysia to work for up to 2 years after graduation.</Text>
            <Text className="text-gray-700">- <Text className="font-semibold">Eligibility:</Text> Must have completed a degree from the University of Nottingham, Malaysia.</Text>
          </View>
        </View>

        {/* Visa Process for Domestic Students */}
        <Text className="text-xl font-semibold mb-4">Visa Process for Domestic Students</Text>

        {/* Application for Student Visa (If applicable) */}
        <View className="mb-4">
          <Text className="text-xl font-semibold mb-2">Application for Student Visa (If applicable)</Text>
          <Text className="text-gray-700 mb-2">
            <Text className="font-semibold">Eligibility:</Text> Domestic students typically do not require a visa to study in their home country.
          </Text>
          <Text className="text-gray-700 font-semibold mb-2">Documents Required:</Text>
          <View className="space-y-2 pl-6">
            {['Proof of identity (e.g., national ID, birth certificate)'].map((doc, index) => (
              <Text key={index} className="text-gray-700">- {doc}</Text>
            ))}
          </View>
        </View>

        {/* Working Rights During Studies */}
        <View className="mb-4">
          <Text className="text-xl font-semibold mb-2">Working Rights During Studies</Text>
          <View className="space-y-2 pl-6">
            <Text className="text-gray-700">- <Text className="font-semibold">Part-Time Work:</Text> Domestic students can work part-time without restrictions during their studies, subject to university regulations.</Text>
          </View>
        </View>

        {/* Working Rights After Graduation */}
        <View className="mb-4">
          <Text className="text-xl font-semibold mb-2">Working Rights After Graduation</Text>
          <View className="space-y-2 pl-6">
            <Text className="text-gray-700">- <Text className="font-semibold">Employment Opportunities:</Text> Domestic graduates are entitled to seek full-time employment in Malaysia without the need for a visa.</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CareerCenterServices;