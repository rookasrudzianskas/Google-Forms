import {Stack} from "expo-router";
import {StatusBar} from "expo-status-bar";

export default function CheckoutStack () {
  return (
    <>
      <Stack screenOptions={{
        contentStyle: {
          padding: 15,
          backgroundColor: "#f0ebf8", flex: 1
        },
        headerStyle: {
          backgroundColor: '#673ab8'
        },
        headerTintColor: '#f0ebf8',
        headerTitleStyle: {
          color: '#f0ebf8'
        }
      }}>
        <Stack.Screen name={"payment"} options={{ title: "Payment Information"}} />
        <Stack.Screen name={"personal"} options={{ title: "Personal Information"}} />
        <Stack.Screen name={"delivery"} options={{ title: "Delivery Information"}} />
      </Stack>
      <StatusBar style="light" />
    </>
  )
}
