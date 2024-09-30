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

      {/* Luzes sobre o background */}
      <View
        style={{
          position: "absolute",
          width: "100%",
          top: 50,
          zIndex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Image style={{ height: 225, width: 90 }} source={light} />
        <Image style={{ height: 160, width: 65 }} source={light} />
      </View>

      {/* Titulo e formulario */}
      <View className="h-full w-full flex justify-around pt-10">
        {/* Titulo */}
        <View className="flex items-center">
          <Text className="text-red-600 font-bold tracking-wider text-5xl">
            Login
          </Text>
        </View>
      </View>
    </View>
  );
}
