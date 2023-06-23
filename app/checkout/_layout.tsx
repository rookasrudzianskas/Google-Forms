import {Stack} from "expo-router";

export default function CheckoutStack () {
  return (
    <Stack>
      <Stack.Screen name={"index"} options={{ title: "Personal Information"}} />
      <Stack.Screen name={"delivery"} options={{ title: "Delivery Information"}} />
      <Stack.Screen name={"payment"} options={{ title: "Payment Information"}} />
    </Stack>
  )
}
