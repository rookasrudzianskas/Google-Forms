// @ts-nocheck
import {View, Text, ScrollView} from "react-native";
import React, {useState} from "react";
import {Button, Card, Checkbox, TextInput, useTheme} from "react-native-paper";
import {useRouter} from "expo-router";

export default function PaymentDetails () {
  const router = useRouter();
  const theme = useTheme();
  const [checked, setChecked] = useState(true);


  const nextPage = () => {
    router.push('/')
  }

  return (
    <ScrollView contentContainerStyle={{paddingBottom: 100, gap: 15}} showsVerticalScrollIndicator={false} className="flex-1">
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
          <TextInput
            label="Card number"
            placeholder="4242 4242 4242 4242"
            // value={text}
            // onChangeText={text => setText(text)}
            style={{
              backgroundColor: theme.colors.background
            }}
          />

          <View className="flex flex-row items-center w-full space-x-4">
            <TextInput
              label="Expiration date"
              placeholder="06/29"
              // value={text}
              // onChangeText={text => setText(text)}
              style={{
                backgroundColor: theme.colors.background,
                flex: 3,
              }}
            />

            <TextInput
              label="Security code"
              placeholder="111"
              // value={text}
              // onChangeText={text => setText(text)}
              style={{
                backgroundColor: theme.colors.background,
                flex: 2,
              }}
            />
          </View>

          <Checkbox.Item
            label={"Save card for future purchases"}
            position={'leading'}
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />

        </Card.Content>
      </Card>

      <Button mode={'contained'} onPress={nextPage} theme={{roundness: 1}}>
        Next
      </Button>
    </ScrollView>
  )
}
