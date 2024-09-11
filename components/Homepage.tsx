import { View, Image, Text, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import { ngolo } from './utils/constants'
import useMovieList from './hooks/useMovieList'

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
      <ScrollView className='relative '>
        <Image className='h-[400px] w-full' source={{uri:image_url}}/>
        
    </ScrollView>
      </View>
    </GestureHandlerRootView>
  )
}

export default Homepage