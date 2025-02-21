import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UpdateProfile } from '@/logic/update-profile';

const PersonalForm = ({ data, token }) => {
  const [isEditable, setIsEditable] = useState(false);
  const queryClient = useQueryClient()
  const [form, setForm] = useState({
    name: data?.name || '',
    email: data?.email || '',
    number: data?.number || '',
    gender: data?.gender || '',
    aadharcard: data?.aadharcard || '',
    pancard: data?.pancard || '',
  });

  const { mutateAsync: updateProfile } = useMutation({
    mutationFn: () => UpdateProfile(token, form),
    onSuccess: (res) => {
        if(res?.success){
          queryClient.invalidateQueries(["profile"]);
          return
        }
        Alert.alert("Error", res?.error || "An unknown error occurred");
    },
  });

  const handleSave = async() => {
    await updateProfile();
    setIsEditable(false);
  };

  const renderField = (label, value, fieldName) => {
    if (!isEditable) {
      return (
        <View className="mb-6">
          <Text className="text-lg font-medium text-gray-700 mb-2">{label}</Text>
          <Text className="text-base text-gray-900 min-h-[24px] pl-1">
            {value || 'Not provided'}
          </Text>
        </View>
      );
    }

    return (
      <View className="mb-6">
        <Text className="text-lg font-medium text-gray-700 mb-2">{label}</Text>
        <TextInput
          value={form[fieldName]}
          onChangeText={(text) => setForm((prev) => ({ ...prev, [fieldName]: text }))}
          className="border border-gray-300 rounded-lg p-3 text-base bg-white"
          placeholder={`Enter your ${label.toLowerCase()}`}
        />
      </View>
    );
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-6">
        {/* Header with Edit/Save button */}
        <View className="flex-row justify-between items-center mb-8">
          <Text className="text-2xl font-bold text-gray-900">Personal Information</Text>
          <TouchableOpacity
            onPress={isEditable ? handleSave : () => setIsEditable(true)}
            className={`px-4 py-2 rounded-lg ${
              isEditable ? 'bg-green-600' : 'bg-blue-600'
            }`}
          >
            <Text className="text-white font-medium">
              {isEditable ? 'Save' : 'Edit'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Form Fields */}
        <View className="bg-white p-6 rounded-xl shadow-sm">
          {renderField('Name', data?.name, 'name')}
          {renderField('Email', data?.email, 'email')}
          {renderField('Phone Number', data?.number, 'number')}
          {renderField('Gender', data?.gender, 'gender')}
          {renderField('Aadhar Card', data?.aadharcard, 'aadhar')}
          {renderField('PAN Card', data?.pancard, 'pancard')}
        </View>

        {/* Cancel Button (only shown in edit mode) */}
        {isEditable && (
          <TouchableOpacity
            onPress={() => {
              setForm({
                name: data?.name || '',
                email: data?.email || '',
                number: data?.number || '',
                gender: data?.gender || '',
                aadharcard: data?.aadharcard || '',
                pancard: data?.pancard || '',
              });
              setIsEditable(false);
            }}
            className="mt-4 p-3 rounded-lg bg-gray-200"
          >
            <Text className="text-center text-gray-700 font-medium">Cancel</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

export default PersonalForm;