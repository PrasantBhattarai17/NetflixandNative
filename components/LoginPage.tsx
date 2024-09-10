import { View, Text, Image, TextInput, Pressable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Logo } from "./utils/constants";
import Checkbox from "expo-checkbox";
import { router } from "expo-router";

const LoginPage = () => {
    const [isChecked, setChecked] = useState<boolean>(false);
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
        keyboardType="email-address"
          placeholder="Email address"
          placeholderTextColor="#b7b7b7"
          className="w-full h-16 px-4 bg-[#0f0f0f] rounded-lg border-[1px] text-white border-gray-500 my-8"
        />
        <TextInput
          placeholder="Password"
           secureTextEntry
          placeholderTextColor="#b7b7b7"
          className="w-full h-16 px-4 bg-[#0f0f0f] rounded-lg text-white border-[1px] border-gray-500 mb-8"
        />
        <Pressable onPress={()=>router.navigate('/(drawer)/Home')} className="w-full h-12 rounded-lg bg-[#e50914]">
            <Text className="text-white font-semibold text-xl text-center my-2">
                Sign In
            </Text>
        </Pressable>

        <Text className="w-full text-center text-[#7b7171] text-xl my-6">OR</Text>
        <Pressable className="w-full h-12 rounded-lg opacity-70  bg-[#413835]">
            <Text className="text-white font-semibold text-lg  text-center my-2">
            Use a Sign-In Code
            </Text>
        </Pressable>
         <Pressable className=" font-semibold my-5">
        <Text className="text-white text-lg text-center ">Forgot password?</Text>
         </Pressable>
         <View className='mx-4 flex-row'>
         <Checkbox  value={isChecked}
            onValueChange={setChecked}
            className="my-1"
            color={isChecked ? "#e50914" : undefined} />
         <Text className="text-white mx-2 text-lg font-semibold ">Remember me</Text>
         </View>
        <View className="flex-row m-4">
            <Text className="text-[#656564] text-lg">New to netflix?</Text>
            <TouchableOpacity onPress={()=>router.navigate('/')} className="mx-2">
                <Text className="text-white font-semibold  text-lg">Sign Up now.</Text>
            </TouchableOpacity>
        </View>
       

        <View className="flex-row m-2">
            <Text className="text-[#656564] text-md">This page is protected by Google reCAPTCHA to ensure you're not a bot.
                <Text className="text-blue-500 font-semibold  ">Learn more.</Text>
            </Text>
        </View>
    

      </View>
    </View>
  );
};

export default LoginPage;
