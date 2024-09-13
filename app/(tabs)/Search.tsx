import { View, Text } from 'react-native'
import React from 'react'
import SearchPage from '../../components/SearchPage'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import Appstore from '../../components/store/movieStore'

const Search = () => {
  return (
    <>
    <Provider store={Appstore}>
    <GestureHandlerRootView className='min-h-screen w-screen flex-1'>
    <ScrollView className='flex-1 bg-black'>
      <SearchPage/>
    </ScrollView>
</GestureHandlerRootView>
    </Provider>
    </>
  )
}

export default Search