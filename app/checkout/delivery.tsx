// @ts-nocheck
import {View, ScrollView} from "react-native";
import React, {useState} from "react";
import {useRouter} from "expo-router";
import {Button, Card, HelperText, RadioButton, useTheme} from "react-native-paper";
import {Controller, useForm} from "react-hook-form";
import {DeliveryInfo, DeliveryInfoSchema} from "../../src/schema/checkout.schema";
import {zodResolver} from "@hookform/resolvers/zod";
import ControlledInput from "../../src/components/ControlledInput";
import {useCheckoutContext} from "../../src/contexts/checkoutContext";

export default function DeliveryDetails () {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<DeliveryInfo>({
    resolver: zodResolver(DeliveryInfoSchema),
    defaultValues: {
      city: 'Vilnius',
      address: 'Rokas',
      postalCode: '12345',
      shipping: 'fast'
    }
  });
  const {setDelivery} = useCheckoutContext();
  const router = useRouter();
  const theme = useTheme();

  const nextPage = (data: DeliveryInfo) => {
    setDelivery(data);
    router.push('/checkout/payment');
  }

  return (
    <ScrollView contentContainerStyle={{paddingBottom: 100, gap: 15, maxWidth: 500, width: '100%', alignSelf: 'center'}} showsVerticalScrollIndicator={false} className="flex-1 space-y-5">
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
          <ControlledInput
            control={control}
            name="city"
            label="City"
          />

          <ControlledInput
            control={control}
            name="postalCode"
            label="Postal Code"
          />

          <ControlledInput
            control={control}
            name="address"
            label="Address"
            placeholder="Name"
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
          <Controller
            name="shippingMethod"
            control={control}
            render={({field: {value, onChange}, fieldState: {error, invalid}}) => (
             <View>
               <HelperText type="error" visible={invalid}>
                 {error?.message}
               </HelperText>
               <RadioButton.Group onValueChange={(value) => onChange(value)} value={value}>
                 <RadioButton.Item label="Free Delivery" value="free" />
                 <RadioButton.Item label="Fast Delivery" value="fast" />
                 <RadioButton.Item label="Rocket Delivery" value="rocket" />
               </RadioButton.Group>
             </View>
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
