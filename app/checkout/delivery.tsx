// @ts-nocheck
import {View, Text, TouchableOpacity} from "react-native";
import React from "react";
import {useRouter} from "expo-router";

export default function DeliveryDetails () {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="font-semibold text-2xl">Delivery Details</Text>
      <TouchableOpacity onPress={() => router.push('/checkout/payment')}>
        <Text className="text-xl text-gray-500 font-[500]">Go To Payment</Text>
      </TouchableOpacity>
    </View>
  )
}
