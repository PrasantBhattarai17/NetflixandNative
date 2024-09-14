import { View, Image, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import { CDN_POSTER_URL, ngolo, Logo, APIoptions } from "./utils/constants";
import useMovieList from "./hooks/useMovieList";
import { FontAwesome } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import useTVPreviewPoster from "./hooks/useTVPreviewPoster";
import BelowHome from "./BelowHome";
const Homepage = () => {
  const image_url = useMovieList();
  const posterArr = useTVPreviewPoster();
  if (!image_url)
    return (
      <View className="flex-col justify-center items-center bg-black h-screen w-screen">
        <Image resizeMode="contain" className="h-52 w-52" source={Logo} />
      </View>
    );
  return (
    <View className="flex-1 bg-black min-h-screen">
      <View className="h-[5%] w-full flex-row items-center justify-around  absolute z-10">
        <Image className="h-12 w-12" source={ngolo} />
        <Pressable>
          <Text className="text-lg text-white">TV Shows</Text>
        </Pressable>
        <Pressable>
          <Text className="text-lg text-white">Movies</Text>
        </Pressable>
        <Pressable>
          <Text className="text-lg text-white">My List</Text>
        </Pressable>
      </View>
      <Image
        resizeMode="cover"
        className="h-[450px] w-full"
        source={{ uri: image_url }}
      />
      <View className="w-full h-24 bg-black flex-row items-center justify-between px-7">
        <Pressable className="flex-col items-center justify-center">
          <AntDesign size={28} color="white" name="plus" />
          <Text className="text-white text-lg">My List</Text>
        </Pressable>
        <Pressable className="flex-row justify-evenly w-24 py-3 rounded-lg bg-[#c4c4c4]">
          <FontAwesome size={28} color="black" name="play" />
          <Text className="text-black text-xl font-semibold">Play</Text>
        </Pressable>
        <Pressable className="flex-col items-center justify-center">
          <Ionicons size={29} color="white" name="information-circle-outline" />
          <Text className="text-white text-lg">Info</Text>
        </Pressable>
      </View>
      <Text className="text-2xl font-bold text-white bg-black px-4 pb-3">
        Previews
      </Text>
      <ScrollView horizontal className=" bg-black h-40 px-1">
        {posterArr.map((item: any) => (
          <Image
            key={item?.name}
            className="h-36 w-36 rounded-full mx-3"
            resizeMode='stretch'
            source={{ uri: CDN_POSTER_URL + item?.poster_path }}
          />
        ))}
      </ScrollView>
      <BelowHome />
     </View>
  );
};

export default Homepage;
