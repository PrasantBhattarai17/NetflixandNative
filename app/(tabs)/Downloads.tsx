import { View, Text, Button, Pressable } from "react-native";
import React from "react";

const Download = () => {
  return (
    <View className="w-full h-full bg-black flex-1 ">
      <Text className="mx-5 text-lg  text-white font-thin">
        Smart Downloads
      </Text>
      <View className="w-full h-[15%] my-6">
        <Text className="text-white text-xl font-semibold mx-3">
          Introducing Downloads For You
        </Text>
        <Text className="text-white mx-3 text-sm font-thin">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          consequuntur, facilis amet praesentium atque corrupti perspiciatis
          magnam doloremque nisi vel ipsa asperiores rerum aspernatur libero,
          quisquam eum animi, nostrum non.
        </Text>
      </View>
      <View className="h-72 p-2 w-full flex-col justify-between items-center">
       <View className="h-48 w-48 rounded-full bg-[#424242]">
       </View>
       <View className="w-full h-12 px-5">
       <Button  title="Setup"></Button>
       </View>
      </View>

      <View className="w-full h-20 my-10 flex-row justify-center items-center">
      <Pressable className="w-52 bg-[#605f5f] rounded"><Text className="text-center p-2 text-white text-md font-semibold">Find Something to Download</Text></Pressable>
      </View>
    </View>
  );
};

export default Download;
