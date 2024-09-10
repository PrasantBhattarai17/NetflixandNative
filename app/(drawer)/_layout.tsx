import { Drawer } from 'expo-router/drawer'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const Layout = () => {
  return (
    <GestureHandlerRootView>
        <Drawer>
            <Drawer.Screen name='Home'/>
            <Drawer.Screen name='profile'/>
        </Drawer>
    </GestureHandlerRootView>
  
  )
}

export default Layout