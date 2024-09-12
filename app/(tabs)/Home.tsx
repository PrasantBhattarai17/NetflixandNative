import { View } from 'react-native'
import React from 'react'
import Homepage from "../../components/Homepage"
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'


const Home = () => {
  return (
    <GestureHandlerRootView className='flex-1'>
        <ScrollView className='flex-1'>
      <Homepage />
      </ScrollView>
</GestureHandlerRootView>  
)
}

export default Home