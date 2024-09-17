import { View, Text } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const More = () => {
  return (
    <View className='w-full h-full bg-black'>
      <View className='flex-col m-2'>
      <Text className='text-lg font-thin text-white  m-1'>App Settings</Text>
      <Text  className='text-lg font-thin text-white m-1'>Account</Text>
      <Text  className='text-lg font-thin text-white m-1'>Help</Text>
      <Text onPress={()=>router.navigate("/")}  className='text-lg font-thin text-white m-1'>Sign Out</Text>
      </View>
    </View>
  )
}

export default More