// @ts-nocheck
import {View, Text, ScrollView} from "react-native";
import React, {useState} from "react";
import {Button, Card, Checkbox, TextInput, useTheme} from "react-native-paper";
import {useRouter} from "expo-router";
import {Controller, useForm} from "react-hook-form";
import {PaymentInfo, PaymentInfoSchema} from "../../src/schema/checkout.schema";
import {zodResolver} from "@hookform/resolvers/zod";
import ControlledInput from "../../src/components/ControlledInput";

export default function PaymentDetails () {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<PaymentInfo>({
    resolver: zodResolver(PaymentInfoSchema),
    defaultValues: {
      saveInfo: true
    }
  });

  const router = useRouter();
  const theme = useTheme();
  const [checked, setChecked] = useState(true);


  const nextPage = () => {
    router.push('/')
  }

  return (
    <ScrollView contentContainerStyle={{paddingBottom: 100, gap: 15, maxWidth: 500, width: '100%', alignSelf: 'center'}} showsVerticalScrollIndicator={false} className="flex-1">
      <Card style={{
        backgroundColor: theme.colors.background
      }}
            theme={{
              roundness: 1
            }}>
        <Card.Title
          title="Payment Information"
          titleVariant={'titleLarge'}
        />
        <Card.Content style={{gap: 10}}>
          <ControlledInput
            control={control}
            name="number"
            label="Card Number"
            placeholder="4242 4242 4242 4242"
          />

          <View className="flex flex-row items-center w-full space-x-4">
            <ControlledInput
              control={control}
              name="expirationDate"
              label="Expiration date"
              placeholder="mm/yyyy"
            />
            <ControlledInput
              control={control}
              name="securityCode"
              label="Security code"
              placeholder="111"
            />
          </View>

          <Controller
            control={control}
            name={'saveInfo'}
            render={({field: {value, onChange}}) => (
              <Checkbox.Item
                label={"Save card for future purchases"}
                position={'leading'}
                status={value ? 'checked' : 'unchecked'}
                onPress={() => {
                  onChange(!value);
                }}
              />
            )}
          />

        </Card.Content>
      </Card>

      <Button mode={'contained'} onPress={handleSubmit(nextPage)} theme={{roundness: 1}}>
        Next
      </Button>
    </ScrollView>
  )
}
