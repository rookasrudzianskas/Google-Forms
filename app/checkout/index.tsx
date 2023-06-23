// @ts-nocheck
import {View, Text, TouchableOpacity} from "react-native";
import React from "react";
import {useRouter} from "expo-router";
import {Button} from "react-native-paper";

export default function PersonalDetails () {
  const router = useRouter();

  const nextPage = () => {
    router.push('/checkout/delivery');
  }

  return (
    <View className="flex-1">
      <Text className="font-semibold text-2xl">Personal Details</Text>

      <Button mode={'contained'} onPress={nextPage} theme={{roundness: 1}}>
        Next
      </Button>
    </View>
  )
}
