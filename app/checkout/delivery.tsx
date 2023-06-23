// @ts-nocheck
import {View, Text, TouchableOpacity} from "react-native";
import React from "react";
import {useRouter} from "expo-router";
import {Button, Card, TextInput, useTheme} from "react-native-paper";

export default function DeliveryDetails () {
  const router = useRouter();
  const theme = useTheme();

  const nextPage = () => {
    router.push('/checkout/payment');
  }

  return (
    <View className="flex-1">
      <Card style={{
        backgroundColor: theme.colors.background
      }}>
        <Card.Title
          title="Delivery Address"
          titleVariant={'titleLarge'}
        />
        <Card.Content style={{gap: 10}}>
          <TextInput
            label="City"
            placeholder="City"
            // value={text}
            // onChangeText={text => setText(text)}
            style={{
              backgroundColor: theme.colors.background
            }}
          />

          <TextInput
            label="Postal code"
            placeholder="Postal code"
            // value={text}
            // onChangeText={text => setText(text)}
            style={{
              backgroundColor: theme.colors.background
            }}
          />

          <TextInput
            label="Address"
            placeholder="Mars Street 1-1"
            // value={text}
            // onChangeText={text => setText(text)}
            style={{
              backgroundColor: theme.colors.background
            }}
          />
        </Card.Content>
      </Card>
      <Button mode={'contained'} onPress={nextPage} theme={{roundness: 1}}>
        Next
      </Button>
    </View>
  )
}
