// @ts-nocheck
import {View, Text, TouchableOpacity, ScrollView} from "react-native";
import React, {useState} from "react";
import {useRouter} from "expo-router";
import {Button, Card, RadioButton, TextInput, useTheme} from "react-native-paper";

export default function DeliveryDetails () {
  const [shipping, setShipping] = useState('free');
  const router = useRouter();
  const theme = useTheme();

  const nextPage = () => {
    router.push('/checkout/payment');
  }

  return (
    <ScrollView contentContainerStyle={{paddingBottom: 100}} showsVerticalScrollIndicator={false} className="flex-1 space-y-5">
      <Card style={{
        backgroundColor: theme.colors.background
      }}
      theme={{
        roundness: 1
      }}>
        <Card.Title
          title="Delivery Information"
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

      <Card style={{
        backgroundColor: theme.colors.background
      }}
            theme={{
              roundness: 1
            }}>
        <Card.Title
          title="Delivery Options"
          titleVariant={'titleLarge'}
        />
        <Card.Content style={{gap: 10}}>
          <RadioButton.Group onValueChange={newValue => setShipping(newValue)} value={shipping}>
            <RadioButton.Item label="Free Delivery" value="free" />
            <RadioButton.Item label="Fast Delivery" value="fast" />
            <RadioButton.Item label="Rocket Delivery" value="rocket" />
          </RadioButton.Group>
        </Card.Content>
      </Card>
      <Button mode={'contained'} onPress={nextPage} theme={{roundness: 1}}>
        Next
      </Button>
    </ScrollView>
  )
}
