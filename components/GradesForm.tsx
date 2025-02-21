import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { UpdateProfile } from '@/logic/update-profile';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const GradesForm = ({ data, token }) => {
  const [isEditable, setIsEditable] = useState(false);
  const queryClient = useQueryClient()
  const [form, setForm] = useState({
    pocname: data?.pocname || '',
    poccontact: data?.poccontact || ''
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

  const renderField = (label, value, fieldName, keyboardType = 'default') => {
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
          placeholder={`Enter ${label.toLowerCase()}`}
          keyboardType={keyboardType}
        />
      </View>
    );
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-6">
        {/* Header with Edit/Save button */}
        <View className="flex-row justify-between items-center mb-8">
          <Text className="text-2xl font-bold text-gray-900">Point of Contact</Text>
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
          {/* POC Name */}
          {renderField('POC Name', data?.pocname, 'pocname')}
          
          {/* POC Contact */}
          {renderField('POC Contact', data?.poccontact, 'poccontact', 'phone-pad')}

          {/* Additional Information Section */}
          <View className="mt-4 p-4 bg-blue-50 rounded-lg">
            <Text className="text-sm text-blue-600">
              Point of Contact (POC) is the primary person responsible for communication and coordination.
            </Text>
          </View>
        </View>

        {/* Cancel Button */}
        {isEditable && (
          <TouchableOpacity
            onPress={() => {
              setForm({
                pocname: data?.pocname || '',
                poccontact: data?.poccontact || ''
              });
              setIsEditable(false);
            }}
            className="mt-4 p-3 rounded-lg bg-gray-200"
          >
            <Text className="text-center text-gray-700 font-medium">Cancel</Text>
          </TouchableOpacity>
        )}

        {/* Contact Information Display */}
        {!isEditable && form.pocname && form.poccontact && (
          <View className="mt-6 p-4 bg-green-50 rounded-lg">
            <Text className="text-base text-green-700 font-medium mb-2">
              Quick Contact
            </Text>
            <Text className="text-sm text-green-600">
              You can reach {form.pocname} at {form.poccontact}
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default GradesForm;