// @ts-nocheck
import {View, TouchableOpacity, ScrollView} from "react-native";
import React from "react";
import {useRouter} from "expo-router";
import {Avatar, Button, Card, Text, TextInput, useTheme, withTheme} from 'react-native-paper';
import {useForm, Controller} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {PersonalInfoSchema, PersonalInfo} from "../../src/schema/checkout.schema";

export default function PersonalDetails () {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: zodResolver(PersonalInfoSchema),
  });

  const router = useRouter();
  const theme = useTheme();
  const nextPage = (data) => {
    console.warn(data)
    router.push('/checkout/delivery');
  }

  return (
    <ScrollView contentContainerStyle={{paddingBottom: 100, gap: 15, maxWidth: 500, width: '100%', alignSelf: 'center'}} showsVerticalScrollIndicator={false} className="flex-1">
      <Card style={{
        backgroundColor: theme.colors.background
      }}
      theme={{
        roundness: 1
      }}
      >
        <Card.Title
          title="Personal Information"
          titleVariant={'titleLarge'}
        />
        <Card.Content style={{gap: 10}}>

          <Controller
            control={control}
            name="name"
            render={({field: {value, onChange, onBlur}}) => (
              <TextInput
                label="Name"
                placeholder="Name"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                error={errors.name}
                style={{
                  backgroundColor: theme.colors.background
                }}
              />
            )}
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

      <Button mode={'contained'} onPress={handleSubmit(nextPage)} theme={{roundness: 1}}>
        Next
      </Button>
    </ScrollView>
  )
}
