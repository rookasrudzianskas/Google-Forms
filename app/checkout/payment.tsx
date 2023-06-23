// @ts-nocheck
import {View, Text} from "react-native";
import React from "react";
import {Button} from "react-native-paper";
import {useRouter} from "expo-router";

export default function PaymentDetails () {
  const router = useRouter();

  const nextPage = () => {
    router.push('/')
  }

  return (
    <View className="flex-1">
      <Text className="font-semibold text-2xl">Payment Details</Text>

      <Button mode={'contained'} onPress={nextPage} theme={{roundness: 1}}>
        Next
      </Button>
    </View>
  )
}
