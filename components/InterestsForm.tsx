import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UpdateProfile } from '@/logic/update-profile';

const InterestsForm = ({ data, token }) => {
  const [isEditable, setIsEditable] = useState(false);
  const queryClient = useQueryClient()
  const [form, setForm] = useState({
    line1: data?.address?.line1 || '',
    line2: data?.address?.line2 || '',
    state: data?.address?.state || '',
    pincode: data?.address?.pincode || '',
    gst: data?.gst || ''
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
    await updateProfile()
    setIsEditable(false);
  };

  const renderField = (label, value, fieldName, multiline = false) => {
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
          className={`border border-gray-300 rounded-lg p-3 text-base bg-white ${
            multiline ? 'h-24 text-start' : ''
          }`}
          placeholder={`Enter ${label.toLowerCase()}`}
          multiline={multiline}
          textAlignVertical={multiline ? 'top' : 'center'}
        />
      </View>
    );
  };

  const renderGSTField = () => {
    if (!isEditable) {
      return (
        <View className="mb-6">
          <Text className="text-lg font-medium text-gray-700 mb-2">GST Number</Text>
          <View className="flex-row items-center">
            <Text className="text-base text-gray-900 flex-1">
              {form.gst || 'Not provided'}
            </Text>
            {form.gst && (
              <Text className="text-sm text-green-600 ml-2">✓ Verified</Text>
            )}
          </View>
        </View>
      );
    }

    return (
      <View className="mb-6">
        <Text className="text-lg font-medium text-gray-700 mb-2">GST Number</Text>
        <TextInput
          value={form.gst}
          onChangeText={(text) => setForm((prev) => ({ ...prev, gst: text }))}
          className="border border-gray-300 rounded-lg p-3 text-base bg-white"
          placeholder="Enter GST number"
          autoCapitalize="characters"
        />
      </View>
    );
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-6">
        {/* Header with Edit/Save button */}
        <View className="flex-row justify-between items-center mb-8">
          <Text className="text-2xl font-bold text-gray-900">Address Details</Text>
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
          {renderField('Address Line 1', data?.address?.line1, 'line1', true)}
          {renderField('Address Line 2', data?.address?.line2, 'line2', true)}
          {renderField('State', data?.address?.state, 'state')}
          {renderField('Pincode', data?.address?.pincode, 'pincode')}
          {renderGSTField()}
        </View>

        {/* Cancel Button */}
        {isEditable && (
          <TouchableOpacity
            onPress={() => {
              setForm({
                line1: data?.address?.line1 || '',
                line2: data?.address?.line2 || '',
                state: data?.address?.state || '',
                pincode: data?.address?.pincode || '',
                gst: data?.gst || ''
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

export default InterestsForm;