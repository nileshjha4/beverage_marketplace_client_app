import { Alert, Image, ScrollView, Text, TextInput, TouchableOpacity, View, Linking } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {useGlobalContext} from "@/context/GlobalProvider"
import { useState } from 'react'
import CustomButton from '@/components/CustomButton'
import { router } from 'expo-router'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { GetCart } from '@/logic/get-cart'
import { AddToCart } from '@/logic/add-to-cart'
import { RemoveFromCart } from '@/logic/remove-from-cart'
import { ApplyCoupon } from '@/logic/apply-coupon'
import { PlaceOrder } from '@/logic/place-order'

const Apply = () => {
  const {token,applied,setApplied} = useGlobalContext();
  const [isLoading, setIsLoading] = useState(false)
  const [couponCode, setCouponCode] = useState('')

  const queryClient = useQueryClient()

  const makeCall = () => {
    const phoneNumber = 'tel:+919324099641'; 
    Linking.openURL(phoneNumber).catch((err) => {
      console.error("Failed to make a call:", err);
    });
  };

  const { data: cartData, isLoading: isLoadingCartData } = useQuery({
    queryFn: () => GetCart(token),
    queryKey: ["cart"],
  });

  const { mutateAsync: addToCart } = useMutation({
    mutationFn: (otherData) => AddToCart(token, otherData?.id, otherData?.quantity, otherData?.price),
    onSuccess: (res) => {
        if(res?.success){
          queryClient.invalidateQueries(["cart"]);
          return
        }
        Alert.alert("Error", res?.error || "An unknown error occurred");
    },
  });

  const { mutateAsync: removeFromCart } = useMutation({
    mutationFn: (otherData) => RemoveFromCart(token, otherData?.id, otherData?.quantity, otherData?.price),
    onSuccess: (res) => {
        if(res?.success){
          queryClient.invalidateQueries(["cart"]);
          return
        }
        Alert.alert(res?.error)
    },
  });

  const { mutateAsync: applyCoupon } = useMutation({
    mutationFn: () => ApplyCoupon(token, couponCode),
    onSuccess: (res) => {
        if(res?.success){
          queryClient.invalidateQueries(["cart"]);
          setCouponCode('')
          Alert.alert("Coupon successfully applied")
          return
        }
        Alert.alert(res?.error)
    },
  });

  const {mutateAsync: placeOrder} = useMutation({
    mutationFn: () => PlaceOrder(token),
    onSuccess: (res) => {
      if(res?.success){
        queryClient.invalidateQueries(["cart"]);
        queryClient.invalidateQueries(["order"])
        Alert.alert("Order placed successfully")
        return
      }
      Alert.alert(res?.error)
    }
  })

  return (
    <SafeAreaView>
  <ScrollView>
    <View className="mx-4 mt-2">
      <Text className="text-[20px] font-bold mb-7">My Cart</Text>

      {cartData?.cart?.length == 0 ? (
        <Text className="text-[16px] font-semibold">Nothing in cart</Text>
      ) : null}

      {/* Cart Items */}
      {cartData?.cart?.map((item) => (
        <View
          key={item?.item_id?._id}
          className="flex-row justify-between items-center bg-white p-4 rounded-lg mb-3 shadow"
        >
          <View className="flex-1">
            <Text className="text-[16px] font-semibold">
              {item?.item_id?.item}
            </Text>
            <Text className="text-gray-600">{item?.item_id?.company}</Text>
            <Text className="text-gray-600">{item?.item_id?.flavour}</Text>
            <View className="flex flex-row gap-4">
              <Text className="text-[13px] font-normal mt-1">
                Rs. {item?.item_id?.price}
              </Text>
              <Text className="text-[13px] font-normal mt-1">
                Min Qty: {item?.item_id?.minqty}
              </Text>
            </View>
            {item?.discount_amt && (
              <View className="text-lg font-semibold mt-1">
                <Text className="line-through text-gray-500">${item.sum_amt}</Text>
                <Text className="ml-2 text-green-600 font-semibold">${item.discount_amt}</Text>
              </View>
            )}
            {!item?.discount_amt && <Text className="text-[15px] font-semibold mt-1">
              Total Rs. {item?.sum_amt?.toFixed(2)}
            </Text>}
          </View>

          {/* Quantity Controls */}
          <View className="flex-row items-center">
            <TouchableOpacity
              onPress={async () => {
                const otherData = {
                  id: item?.item_id?._id,
                  quantity:
                    item?.qty == item?.item_id?.minqty
                      ? 0
                      : item?.qty - 1,
                  price: item?.item_id?.price,
                };
                await removeFromCart(otherData);
              }}
              className="bg-gray-200 w-8 h-8 rounded-full items-center justify-center"
            >
              <Text className="text-[18px] font-bold">-</Text>
            </TouchableOpacity>

            <Text className="mx-4 min-w-[30px] text-center">{item.qty}</Text>

            <TouchableOpacity
              onPress={async () => {
                const otherData = {
                  id: item?.item_id?._id,
                  quantity: item?.qty + 1,
                  price: item?.item_id?.price,
                };
                await addToCart(otherData);
              }}
              className="bg-gray-200 w-8 h-8 rounded-full items-center justify-center"
            >
              <Text className="text-[18px] font-bold">+</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {/* Total Amount */}
      {cartData?.cart?.length != 0 ? (
        <View className="mt-4 mb-3">
          <Text className="text-[18px] font-bold">
            Net Total: Rs.{' '}
          {cartData?.final_amount  ?  (
          <>
            <Text className="line-through text-gray-500">{cartData?.total?.toFixed(2)}</Text>
            <Text className="ml-2 text-green-600 font-semibold">{cartData?.final_amount?.toFixed(2)}</Text>
          </>
          ) : (
            cartData?.total?.toFixed(2)  
          )}
          </Text>
        </View>
    ) : null}

      {/* Coupon Code Section */}
      {cartData?.cart?.length != 0 ? (
        <View className="mt-5">
          <Text className="text-[16px] font-semibold mb-2">Apply Coupon Code</Text>
          <View className="flex-row items-center">
            <TextInput
              placeholder="Enter Coupon Code"
              className="flex-1 border border-gray-300 rounded-lg p-3 text-[14px]"
              value={couponCode}
              onChangeText={(e)=>setCouponCode(e)} 
            />
            <TouchableOpacity
              onPress={async()=>{
                await applyCoupon();
              }}
              className="bg-blue-500 px-4 py-3 rounded-lg ml-2"
            >
              <Text className="text-white font-semibold">Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}

      {cartData?.cart?.length != 0 ? (
        <>
          <CustomButton
            title="Call"
            handlePress={makeCall}
            isLoading={isLoading}
            containerStyle="mt-7"
          />
          <CustomButton
            title="Order"
            handlePress={async() => {
              await placeOrder();
            }}
            isLoading={isLoading}
            containerStyle="mt-7"
          />
        </>
      ) : null}
    </View>
  </ScrollView>
</SafeAreaView>
  );
};

export default Apply;