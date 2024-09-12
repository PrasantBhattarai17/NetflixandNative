import { View, Image, Text, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import { ngolo } from './utils/constants'
import useMovieList from './hooks/useMovieList'
import { FontAwesome } from '@expo/vector-icons'
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';


const Homepage = () => {
  const image_url=useMovieList();
  return (
    <GestureHandlerRootView>
      <View className='flex-1 '>
        <View className='h-[10%] w-full  flex-row items-center justify-around my-6 absolute z-10'> 
      <Image className='h-12 w-12 ' source={ngolo} />
      <Pressable><Text className='text-lg  text-white'>TV Shows</Text></Pressable>
      <Pressable><Text className='text-lg  text-white'>Movies</Text></Pressable>
      <Pressable><Text className='text-lg  text-white'>My List</Text></Pressable>
        </View>
      <ScrollView className=' '>
        <Image resizeMode='cover' className='h-[450px] w-full' source={{uri:image_url}}/>
        <View className='w-full h-24 bg-black flex-row items-center justify-between px-7 '>
          <Pressable className='flex-col items-center justify-center'>
            <AntDesign size={28}  color='white' name='plus'/>
            <Text className='text-white text-lg'>My List</Text>
            </Pressable>
          <Pressable className='flex-row  justify-evenly w-24 py-3 rounded-lg  bg-[#c4c4c4]'>
            <FontAwesome size={28}  color='black'   name='play'/>
            <Text className='text-black text-xl font-semibold'>Play</Text>
            </Pressable>
          <Pressable className='flex-col items-center justify-center'>
            <Ionicons size={29}  color='white'   name='information-circle-outline'/>
            <Text className='text-white text-lg'>Info</Text>
            </Pressable>
        </View>
        
    </ScrollView>
      </View>
    </GestureHandlerRootView>
  )
}

export default Homepage