import { View, Text, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { CDN_POSTER_URL } from './utils/constants';
import Ionicons from "@expo/vector-icons/Ionicons";

const ListSearch = () => {
    const SearchedData=useSelector((store:any)=>store.searched?.searchData);

  return (
    <View className='flex-1 bg-black gap-2'>
   {SearchedData.map((item:any)=>(<View className='w-full h-32 bg-[#424242] flex-row'>
        <Image  alt={item?.title} key={item?.title} resizeMode='stretch' className='h-32 w-32' source={{uri:CDN_POSTER_URL+item?.poster_path}} />
        <View className='flex-row justify-between w-[200px]'>
            <Text className='text-lg text-white'>{item?.title}</Text>
            <Ionicons size={29} color="white" name="play-circle-outline" />
            </View>
    </View>))}
    </View>
  )
}

export default ListSearch