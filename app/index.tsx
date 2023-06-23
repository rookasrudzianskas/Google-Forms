// @ts-nocheck
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useRouter} from "expo-router";

export default function Page() {
  const router = useRouter();

  return (
    <View className="flex-1 pt-16 px-5 bg-white">
      <TouchableOpacity activeOpacity={0.7} onPress={() => router.push('/checkout')}>
        <Text className="text-xl text-gray-500 font-[500]">Go To Checkout</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
