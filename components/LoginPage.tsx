import { View, Text, Image, TextInput, Pressable } from "react-native";
import React from "react";
import { Logo } from "./utils/constants";

const LoginPage = () => {
  return (
    <View className="h-full w-full bg-black">
      <Image
        className="h-28 w-28 mx-4 "
        style={{ resizeMode: "contain" }}
        source={Logo}
      />
      <View className="h-[90%] w-full px-5 py-2">
        <Text className="text-3xl font-bold text-white">Sign In</Text>
        <TextInput
          placeholder="Email address"
          placeholderTextColor="#b7b7b7"
          className="w-full h-16 px-4 bg-[#0f0f0f] rounded-lg border-[1px] border-gray-500 my-8"
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#b7b7b7"
          className="w-full h-16 px-4 bg-[#0f0f0f] rounded-lg border-[1px] border-gray-500 mb-8"
        />
        <Pressable className="w-full h-12 rounded-lg bg-[#e50914]">
            <Text className="text-white font-semibold text-xl text-center my-2">
                Sign In
            </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginPage;
