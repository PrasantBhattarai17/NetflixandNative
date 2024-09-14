import { View, Text, Image } from 'react-native';
import React from 'react';
import usePopularMovies from './hooks/usePopularMovies';
import { CDN_POSTER_URL, Popular_api, trend_api } from './utils/constants';
import { FlatList } from 'react-native';

const BelowHome = () => {
  const Pdata = usePopularMovies(Popular_api);
  const Tdata = usePopularMovies(trend_api);

  return (
    <View className='h-[700px] bg-black flex-col'>
      <Text className="text-2xl font-bold text-white bg-black px-4 pb-3">
        Popular on Netflix
      </Text>
      <FlatList
        horizontal
        data={Pdata}
        keyExtractor={(item: any) => item?.title}
        renderItem={({ item }) => (
          <Image
            className='h-60 w-44'
            resizeMode='contain'
            source={{ uri: CDN_POSTER_URL + item?.poster_path }}
          />
        )}
      />
      <Text className="text-2xl font-bold text-white bg-black px-3 pb-3">
        Trending now
      </Text>
      <FlatList
        className='pb-28'
        horizontal
        data={Tdata}
        keyExtractor={(item: any) => item?.title}
        renderItem={({ item }) => (
          <Image
            className='h-60 w-44'
            resizeMode='contain'
            source={{ uri: CDN_POSTER_URL + item?.poster_path }}
          />
        )}
      />
    </View>
  );
};

export default BelowHome;
