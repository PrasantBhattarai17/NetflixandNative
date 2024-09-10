import {
  View,
  Text,
  ImageBackground,
  Image,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Logo, netflixBG } from "./utils/constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

const Signin = () => {
  return (
    <View className="flex-1 h-full">
      <ImageBackground source={netflixBG} className="h-full w-full absolute" />
      <View className="bg-black opacity-60 h-full w-full absolute" />
      <LinearGradient
        colors={["transparent", "black"]}
        style={{
          position: "absolute",
          top: 0,
          height: "30%",
          width: "100%",
        }}
        start={{ x: 1, y: 1 }}
        end={{ x: 1, y: 0 }}
      />
      <LinearGradient
        colors={["transparent", "black"]}
        style={{
          position: "absolute",
          bottom: 0,
          height: "30%",
          width: "100%",
        }}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View className="flex-row justify-between">
          <Image
            className="h-24 w-24 mx-2 "
            style={{ resizeMode: "contain" }}
            source={Logo}
          />
          <Pressable
            onPress={() => router.navigate("/Login")}
            className="mx-3 h-10 my-7 bg-[#e50914] p-1 px-2 rounded-lg"
          >
            <Text className="text-white text-lg font-semibold">Sign in</Text>
          </Pressable>
        </View>
        <View className="h-full py-14 px-5">
          <View className="flex-col h-[85%]">
            <View className="h-[50%]">
              <Text className="text-white text-4xl font-bold text-center">
                Unlimited movies, TV shows, and more
              </Text>
              <Text className="text-white text-lg font-semibold text-center m-2">
                Starts at USD 2.99. Cancel anytime.
              </Text>
              <Text className="text-white text-center font-semibold text-lg m-3">
                Ready to watch? Enter your email to create or restart your
                membership.
              </Text>
            </View>
            <View className="flex-col items-center h-[50%] my-2">
              <TextInput
                placeholderTextColor="#fff"
                placeholder="Enter email address"
                className="text-white p-2 mx-4 my-4 w-[90%] h-14 border-[1px] bg-[#0f0f0f] opacity-70 rounded-md border-gray-400"
              />
              <Pressable className="bg-[#e50914] p-3 flex-row rounded">
                <Text className="text-xl text-white font-semibold">
                  Get Started
                </Text>
                <Ionicons
                  size={28}
                  color="#fff"
                  name="chevron-forward-outline"
                />
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Signin;
