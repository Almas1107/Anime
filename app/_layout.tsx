import { Slot } from "expo-router";
import { useEffect } from "react";
import { View, Text } from "react-native";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="seeall/[genre]" />
        <Stack.Screen name="anime/[id]" />
      </Stack>
      <Text>Footer</Text>
    </View>
  );
}
