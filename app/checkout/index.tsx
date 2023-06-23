// @ts-nocheck
import {View, TouchableOpacity} from "react-native";
import React from "react";
import {useRouter} from "expo-router";
import {Avatar, Button, Card, Text, TextInput, useTheme, withTheme} from 'react-native-paper';

export default function PersonalDetails () {
  const router = useRouter();
  const theme = useTheme();
  const nextPage = () => {
    router.push('/checkout/delivery');
  }

  return (
    <View className="flex-1" style={{gap: 15}}>
      <Card style={{
        backgroundColor: theme.colors.background
      }}>
        <Card.Title
          title="Personal Information"
          titleVariant={'titleLarge'}
        />
        <Card.Content style={{gap: 10}}>
          <TextInput
            label="Name"
            placeholder="Name"
            // value={text}
            // onChangeText={text => setText(text)}
            style={{
              backgroundColor: theme.colors.background
            }}
          />

          <TextInput
            label="Email"
            placeholder="hey@byrookas.com"
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
