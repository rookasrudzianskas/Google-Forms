import {Slot} from "expo-router";
import {PaperProvider} from "react-native-paper";
import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    roundness: 0,
    primary: '#673ab8',
    secondary: '#f0ebf8',
  },
};

export default function RootLayout() {
  return (
    <PaperProvider theme={theme}>
      <Slot />
    </PaperProvider>
  )
}
