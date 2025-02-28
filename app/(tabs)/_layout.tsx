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
          height: 80,
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
            <View className="flex-1 items-center">
              <Image
                style={{ height: 25, width: 25 }}
                resizeMode="contain"
                tintColor={focused ? "white" : "#8c8787"}
                source={home}
              />
              <Text
                className="text-[10px] "
                style={{ color: focused ? "white" : "#8c8787" }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen name="Search" options={{ title: "Search",  tabBarIcon: ({ focused }) => (
            <View className="flex-1  items-center ">
              <Image
                style={{ height: 26, width: 26 }}
                resizeMode="contain"
                tintColor={focused ? "white" : "#8c8787"}
                source={search}
              />
              <Text
                className="text-[10px] "
                style={{ color: focused ? "white" : "#8c8787" }}
              >
                Search
              </Text>
            </View>
          ), }} />
      <Tabs.Screen name="ComingSoon" options={{ title: "Coming Soon",  tabBarIcon: ({ focused }) => (
            <View className="flex-1  items-center">
              <MaterialCommunityIcons name="animation-play" size={23} color={focused?'#fff':'#8c8787'} />
              <Text
                className="text-[10px] "
                style={{ color: focused ? "white" : "#8c8787" }}
              >
                New
              </Text>
            </View>
          ), }} />
      <Tabs.Screen name="Downloads" options={{ title: "Downloads",  tabBarIcon: ({ focused }) => (
            <View className="flex-1  items-center  ">
              <Image
                style={{ height: 30, width: 30 }}
                resizeMode="contain"
                tintColor={focused ? "white" : "#8c8787"}
                source={downloads}
              />
              <Text
                className="text-[10px] "
                style={{ color: focused ? "white" : "#8c8787" }}
              >
                Down..
              </Text>
            </View>
          ), }} />
      <Tabs.Screen name="More" options={{ title: "More",  tabBarIcon: ({ focused }) => (
            <View className="flex-1  items-center">
              <Image
                style={{ height: 29, width: 25 }}
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
