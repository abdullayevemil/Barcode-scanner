import {View, Text, Image} from "react-native";
import {React} from 'react';
import {Tabs} from "expo-router";
import Home from "./home";
import {icons} from '../../constants';
import profile from "../../assets/icons/profile.png";

const TabIcon = ({icon, color, name, focused}) => {
    return (
        <View className='justify-center items-center'>
            <Image
            source={icon}
            resizeMode="contain"
            tintColor={color}
            className='w-6 h-6'
            />
            
            <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}>
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
    return (
        <Tabs
        screenOptions={{
            tabBarShowLabel: false
        }}
        >
            <Tabs.Screen 
                name="home"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon icon={icons.home} color={color} focused={focused} name='Home'/>
                    )
                }}
            />
            
            <Tabs.Screen
                name="scan"
                options={{
                    title: 'Scan',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon icon={icons.scanner} color={color} focused={focused} name='Scan'/>
                    )
                }}
            />
            
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon icon={icons.profile} color={color} focused={focused} name='Profile'/>
                    )
                }}
            />
        </Tabs>
    )
}

export default  TabsLayout;