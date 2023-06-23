// @ts-nocheck
import {View, Text, TouchableOpacity} from "react-native";
import React from "react";
import {useRouter} from "expo-router";

export default function PersonalDetails () {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="font-semibold text-2xl">Personal Details</Text>
      <TouchableOpacity onPress={() => router.push('/checkout/delivery')}>
        <Text className="text-xl text-gray-500 font-[500]">Go To Delivery</Text>
      </TouchableOpacity>
    </View>
  )
}
