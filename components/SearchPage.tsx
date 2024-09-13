import { View,Image,Text, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { APIoptions, search, Search_API, searchTail, voice } from './utils/constants'
import ListSearch from './ListSearch'
import { useDispatch, useSelector} from "react-redux";
import { addSearchData } from './store/SearchSlice'
const SearchPage = () => {
    const [searchData,setSearchData]=useState('');
    const dispatch=useDispatch();

    const fetchSearch=async()=>{
      if (!searchData) return; 
      const api = Search_API + searchData + searchTail;
        const response=await fetch(api,APIoptions);
        const json=await response.json();
       dispatch(addSearchData(json?.results));
      }
      const handleSubmit=()=>{
        fetchSearch();
        setSearchData('');
        }
        

  return (
<View className='flex-1'>
    <View className='w-full h-16  bg-[#424242] flex-row items-center  justify-evenly px-2 '>
    <Image tintColor='#b3b3b3' className='h-6 w-6' source={search}/>
    <TextInput onSubmitEditing={()=>handleSubmit()}  defaultValue={searchData} onChangeText={(text)=>setSearchData(text)} className='w-[80%]  h-20 px-2 text-[17px] text-white '  placeholderTextColor='#b3b3b3' placeholder='Search for show,movie,genre,e.t.c'/>
    <Image  tintColor='#b3b3b3' resizeMode='contain' className='h-6 w-8' source={voice}/>
    </View>
    <Text className="text-3xl font-bold text-white bg-black p-4">Top Searches</Text>  
    <ListSearch/>
     <StatusBar hidden/>
</View>
  )
}

export default SearchPage