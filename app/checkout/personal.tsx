// @ts-nocheck
import {ScrollView} from "react-native";
import React from "react";
import {useRouter} from "expo-router";
import {Button, Card, useTheme} from 'react-native-paper';
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {PersonalInfoSchema, PersonalInfo} from "../../src/schema/checkout.schema";
import ControlledInput from "../../src/components/ControlledInput";
import {useCheckoutContext} from "../../src/contexts/checkoutContext";

export default function PersonalDetails () {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<PersonalInfo>({
    resolver: zodResolver(PersonalInfoSchema),
  });
  const {setPersonal} = useCheckoutContext();

  const router = useRouter();
  const theme = useTheme();
  const nextPage = (data: PersonalInfo) => {
    setPersonal(data);
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

          <ControlledInput
            control={control}
            name="name"
            label="Name"
            placeholder="Name"
          />

          <ControlledInput
            control={control}
            name="email"
            label="Email"
            placeholder="hey@email.com"
          />

          <ControlledInput
            control={control}
            name="password"
            label="Password"
            secureTextEntry
          />

          <ControlledInput
            control={control}
            name="confirmPassword"
            label="Confirm Password"
            secureTextEntry
          />

        </Card.Content>
      </Card>

      <Button mode={'contained'} onPress={handleSubmit(nextPage)} theme={{roundness: 1}}>
        Next
      </Button>
    </ScrollView>
  )
}
