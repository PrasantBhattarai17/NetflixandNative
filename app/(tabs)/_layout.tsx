import { Tabs } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import { collection, downloads, home, more, search } from "../../components/utils/constants";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#121212",
          height: 75,
          position: "absolute",
          elevation: 10,
          borderRadius: 5,
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "#8c8787",
        tabBarActiveTintColor: "#fff",
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <View className="flex-1 justify-center items-center">
              <Image
                style={{ height: 28, width: 28 }}
                resizeMode="contain"
                tintColor={focused ? "white" : "#8c8787"}
                source={home}
              />
              <Text
                className="text-[12px] "
                style={{ color: focused ? "white" : "#8c8787" }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen name="Search" options={{ title: "Search",  tabBarIcon: ({ focused }) => (
            <View className="flex-1 justify-center items-center mr-2">
              <Image
                style={{ height: 26, width: 26 }}
                resizeMode="contain"
                tintColor={focused ? "white" : "#8c8787"}
                source={search}
              />
              <Text
                className="text-[12px] "
                style={{ color: focused ? "white" : "#8c8787" }}
              >
                Search
              </Text>
            </View>
          ), }} />
      <Tabs.Screen name="ComingSoon" options={{ title: "Coming Soon",  tabBarIcon: ({ focused }) => (
            <View className="flex-1 justify-center items-center mr-1">
              <MaterialCommunityIcons name="animation-play" size={28} color={focused?'#fff':'#8c8787'} />
              <Text
                className="text-[11px] "
                style={{ color: focused ? "white" : "#8c8787" }}
              >
                Coming Soon
              </Text>
            </View>
          ), }} />
      <Tabs.Screen name="Downloads" options={{ title: "Downloads",  tabBarIcon: ({ focused }) => (
            <View className="flex-1 justify-center items-center ml-1 mb-1">
              <Image
                style={{ height: 34, width: 34 }}
                resizeMode="contain"
                tintColor={focused ? "white" : "#8c8787"}
                source={downloads}
              />
              <Text
                className="text-[11px]  mx-1"
                style={{ color: focused ? "white" : "#8c8787" }}
              >
                Downloads
              </Text>
            </View>
          ), }} />
      <Tabs.Screen name="More" options={{ title: "More",  tabBarIcon: ({ focused }) => (
            <View className="flex-1 justify-center items-center">
              <Image
                style={{ height: 29, width: 29 }}
                resizeMode="contain"
                tintColor={focused ? "white" : "#8c8787"}
                source={more}
              />
              <Text
                className="text-[11px] "
                style={{ color: focused ? "white" : "#8c8787" }}
              >
                More
              </Text>
            </View>
          ), }} />
    </Tabs>
  );
};

export default Layout;
