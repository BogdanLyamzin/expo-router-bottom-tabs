import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router';
import {BottomTabBar} from '@react-navigation/bottom-tabs';

const _layout = () => {
  return (
    <Tabs
        initialRouteName={
        '/main'
        }
        screenOptions={{
            
        }}
        // tabBar={props=> <TabBar {...props} />}
        tabBar={(props) => <BottomTabBar {...props}/>}
    >
        <Tabs.Screen
            name="main"
            options={{
                title: "Home",
                href: "/main",
                label: "Home"
            }}
        />
        <Tabs.Screen
            name="explore"
            options={{
                title: "Explore",
                ref: "/explore",
                label: "Explore"
            }}
        />
        <Tabs.Screen
            name="create"
            options={{
                title: "Create",
                ref: "/create",
                label: "Create"
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
                title: "Profile",
                ref: "/profile",
                label: "Profile"
            }}
        />
    </Tabs>
  )
}

export default _layout