import { Slot } from "expo-router";
import { useEffect } from "react";
import { View, Text } from "react-native";
import { Header } from "../components";

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Slot />
      <Text>Footer</Text>
    </View>
  );
}
