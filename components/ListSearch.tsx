import { View, Text, Image } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { CDN_POSTER_URL } from './utils/constants';
import Ionicons from "@expo/vector-icons/Ionicons";
import { FlatList } from 'react-native-gesture-handler';

const ListSearch = () => {
  const SearchedData = useSelector((store: any) => store.searched?.searchData);
  const Top = useSelector((store: any) => store.searched?.constantData);
  const renderMovieItem = ({ item }: { item: any }) => (
    <View className='w-full h-32 bg-[#424242] flex-row mb-3'>
      <Image
        alt={item?.title}
        className='h-32 w-32'
        resizeMode='stretch'
        source={{ uri: CDN_POSTER_URL + item?.poster_path }}
      />
      <View className='flex-row justify-between w-[220px]'>
        <View className='w-[90%] flex-row justify-center items-center'>
          <Text className='text-lg text-white'>{item?.title}</Text>
        </View>
        <View className='flex-row items-center w-[13%]'>
          <Ionicons size={29} color="white" name="play-circle-outline" />
        </View>
      </View>
    </View>
  );

  return (
    <View className='flex-1 bg-black gap-2 mb-20'>
      {SearchedData && SearchedData.length > 0 ? (
        <>
          <Text className="text-2xl font-bold text-white bg-black px-3 pb-3">
            Search Results
          </Text>
          <FlatList
            data={SearchedData}
            keyExtractor={(item: any) => item?.id}
            renderItem={renderMovieItem}
            ListEmptyComponent={<Text className="text-white px-4">No search results available</Text>}
          />
        </>
      ) : (
        <>
          
          <FlatList
            data={Top}
            keyExtractor={(item: any) => item?.id}
            renderItem={renderMovieItem}
            ListEmptyComponent={<Text className="text-white px-4">No top movies available</Text>}
          />
        </>
      )}
    </View>
  );
};

export default ListSearch;
