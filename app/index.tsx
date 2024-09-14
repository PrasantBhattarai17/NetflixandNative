import { StatusBar, View} from 'react-native'
import React from 'react'
import Signin from '../components/Signin'

const index = () => {
  return (
    <View className='flex-1 h-[1000px]'>
      <Signin/>  
      <StatusBar hidden/>
        </View>
  )
}

export default index