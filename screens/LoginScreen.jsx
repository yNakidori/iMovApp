import { View, Image, Text } from "react-native";
import React from "react";
import bg from "../assets/images/background.png";
import light from "../assets/images/light.png";
import { StatusBar } from "expo-status-bar";

export default function LoginScreen() {
  return (
    <View className="bg-white h-full w-full flex-row">
      <StatusBar style="light" />
      <Image className="h-full w-full absolute" source={bg}></Image>

      <View className="flex-row justify-around w-full absolute">
        <Image className="h-[225] w-[90]" source={light}></Image>
        <Image className="h-[160] w-[65]" source={light}></Image>
      </View>
    </View>
  );
}
