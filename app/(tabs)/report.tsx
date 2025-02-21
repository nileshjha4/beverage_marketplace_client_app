import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import Collapsible from 'react-native-collapsible';
import {useGlobalContext} from "@/context/GlobalProvider"
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { GetOrder } from '@/logic/get-order';
import { SafeAreaView } from 'react-native-safe-area-context';

// const downloadPDF = async (invoiceURL) => {
//   const filePath = RNFS.DocumentDirectoryPath + '/invoice.pdf';
  
//   try {
//     const result = await RNFS.downloadFile({
//       fromUrl: invoiceURL,
//       toFile: filePath,
//     }).promise;

//     if (result.statusCode === 200) {
//       Alert.alert('Download successful', `File saved to: ${filePath}`);
//     } else {
//       Alert.alert('Download failed', 'Status Code: ' + result?.statusCode);
//     }
//   } catch (error) {
//     Alert.alert('Download failed', error?.message);
//   }
// };

const Report = () => {
  const queryClient = useQueryClient()
  const { token } = useGlobalContext();
  const [expandedOrder, setExpandedOrder] = useState(null);
  const [trigger, setTrigger] = useState(false)

  const toggleOrder = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  const { data: orderData, isLoading: isLoadingOrderData } = useQuery({
    queryFn: () => GetOrder(token),
    queryKey: ['order'],
  });

  useEffect(()=>{
    queryClient.invalidateQueries(['order'])
  },[trigger])

  const renderOrderItem = ({ item }) => (
    <View className="flex-row justify-between py-2 border-b border-gray-200">
      <Text className="text-sm font-medium text-gray-700">{item?.item_id?.item}</Text>
      <Text className="text-sm text-gray-500">Qty: {item?.qty}</Text>
      <Text className="text-sm font-semibold text-gray-800">${item?.sum_amt}</Text>
    </View>
  );

  const renderOrder = ({ item }) => (
    <View className="my-4 mx-3 p-4 bg-white border border-gray-300 rounded-lg shadow-sm">
      <View>
      <View
        className="flex-col justify-between"
      >
        <Text className="text-lg font-semibold text-gray-900">Order ID: {item._id}</Text>
        <Text className="text-base font-semibold text-black">Total: ${item?.total}</Text>
      </View>
      <View className='flex flex-row justify-between mt-1'>
      <TouchableOpacity
        onPress={() => toggleOrder(item._id)}
        className='p-2 rounded-lg bg-[#0B60A3]'
      >
        <Text className="text-sm text-white text-center">View Details</Text>
      </TouchableOpacity>
      <TouchableOpacity
      className='p-2 bg-[#0B60A3] rounded-lg'
      // onPress={()=>{
      //   downloadPDF(item?.invoice)
      // }}
      >
        <Text className="text-sm text-white">Download Invoice</Text>
      </TouchableOpacity>
      </View>
      </View>

      <Collapsible collapsed={expandedOrder !== item._id}>
        <FlatList
          data={item.order}
          renderItem={renderOrderItem}
          keyExtractor={(orderItem) => String(orderItem._id)}
        />
      </Collapsible>
    </View>
  );

  if (isLoadingOrderData) {
    return (
      <SafeAreaView>
        <Text className="text-center mt-5 text-lg text-gray-600">Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1">
        <View className="mx-4 mt-2">
          <Text className="text-2xl font-bold mb-7">My Cart</Text>
        </View>
        {orderData?.order?.length > 0 ? (
          <FlatList
            data={orderData?.order}
            renderItem={renderOrder}
            keyExtractor={(order) => String(order._id)}
          />
        ) : (
          <View className="mt-4 items-center">
            <Text className="text-lg font-semibold text-gray-600">No order yet</Text>
          </View>
        )}
    </SafeAreaView>
  );
};

export default Report;