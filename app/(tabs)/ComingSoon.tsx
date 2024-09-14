import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import Upcoming from '../../components/Upcoming'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const ComingSoon = () => {
  return (
    <GestureHandlerRootView>
    <View className='h-screen w-screen flex-1 bg-black'>
    <Upcoming />
    </View>
    </GestureHandlerRootView>
  )
}

export default ComingSoon