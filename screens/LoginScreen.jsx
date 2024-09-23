import { View, Text } from "react-native";
import { Image } from "react-native";
import React from "react";
import bg from "../assets/images/background.png";

export default function LoginScreen() {
  return (
    <View className="bg-white h-full w-full">
      <Image source={bg} />
    </View>
  );
}
