import { Text, View, Image } from 'react-native'
import { Tabs } from 'expo-router'
import  icons from '@/constants/icons'
import React from 'react';

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className='items-center justify-center gap-2'>
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text className={`${focused ? 'font-psemibold': 'font-pregular'} text-xs`}
            style={{color:color}}
            >
                {name}
            </Text>
        </View>
    );
};

const TabsLayout = () => {
  return (
    <View className="flex-1">

    <Tabs
    screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#0B60A3",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
            backgroundColor: "#F2F2F2",
            borderTopWidth: 1,
            borderTopColor: "#D3D3D3",
            height: 84,
        }
    }} 
    >
        <Tabs.Screen 
            name="home" 
            options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon:({color,focused})=>(
                    <TabIcon
                    name="Home"
                    icon={icons?.home}
                    color={color}
                    focused={focused}
                    /> 
                )
            }}
            />
             <Tabs.Screen 
            name="report" 
            options={{
                title: 'history',
                headerShown: false,
                tabBarIcon:({color,focused})=>(
                    <TabIcon
                    name="History"
                    icon={icons?.order}
                    color={color}
                    focused={focused}
                    /> 
                )
            }}
            />
             <Tabs.Screen 
            name="apply" 
            options={{
                title: 'cart',
                headerShown: false,
                tabBarIcon:({color,focused})=>(
                    <TabIcon
                    name="Cart"
                    icon={icons?.cart1}
                    color={color}
                    focused={focused}
                    /> 
                )
            }}
            />
             <Tabs.Screen 
            name="profile" 
            options={{
                title: 'Profile',
                headerShown: false,
                tabBarIcon:({color,focused})=>(
                    <TabIcon
                    name="Profile"
                    icon={icons?.profile}
                    color={color}
                    focused={focused}
                    /> 
                )
            }}
            />
    </Tabs>
    </View>
  )
}
export default TabsLayout
