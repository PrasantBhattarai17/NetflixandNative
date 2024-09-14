import { View, Text, Image } from 'react-native';
import React from 'react';
import { bell, CDN_POSTER_URL, upcoming_api } from './utils/constants';
import usePopularMovies from './hooks/usePopularMovies';
import { FlatList } from 'react-native-gesture-handler';
import Fontisto from '@expo/vector-icons/Fontisto';
const imageBaseURL = "https://image.tmdb.org/t/p/w500";

const Upcoming = () => {
  const upcomingData = usePopularMovies(upcoming_api);
  console.log(upcomingData)

  const renderUpcomingItem = ({ item }: any) => (
    <View className='flex-col items-center justify-center h-300 my-4 border-2 border-gray-400'>
      <View className='flex-col items-end'>
        <Image
        resizeMode='stretch'
          className='h-48 w-[350px] '
          source={{ uri: CDN_POSTER_URL + item?.backdrop_path }}
          />
          <View className='flex-row  mx-8 justify-between gap-4 items-center'>
            <View className='py-2'>
                <Image tintColor='white' className='h-8 w-8 mx-4' source={bell}  />
                <Text className='text-center text-white text-md'>Remind Me</Text>
            </View>
            <View>
                <Fontisto color='white' name='share' size={30}/>
                <Text className='text-center text-md text-white'>Share</Text>
            </View>
          </View>
      </View>
      <View className='flex-col items-start'>
        <Text className="text-white  mx-2  text-md"> Releasing On {item?.release_date}</Text>
        <Text className="text-white  m-2 font-bold text-xl">{item?.title}</Text>
        <Text className="text-white  m-2  text-md">{item?.overview}</Text>
      </View>
    </View>
  );

  return (
    <View className='flex-1'>
      <View className='flex-row items-center mx-5'>
        <View className='flex-row h-8 w-8 bg-red-500 rounded-full items-center justify-center'>
          <Image tintColor="white" className='h-6 w-6' source={bell} />
        </View>
        <Text className='text-white text-2xl font-semibold mx-2'>
          Notifications
        </Text>
      </View>
      <FlatList
        data={upcomingData}
        keyExtractor={(item: any) => item?.id}
        renderItem={renderUpcomingItem}
        className='mb-16'
      />
    </View>
  );
};

export default Upcoming;
