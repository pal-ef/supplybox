import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Boxes from '../screens/Boxes';
import Products from '../screens/Products';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigator = () =>  {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: 'black'
            }}
        >
            <Tab.Screen 
                name="Home2"
                component={Home}
                options={{
                    tabBarIcon: ({focused, color, size}) => {
                        return <Ionicons name="home-outline" color={color} size={size} />
                    },
                }}
            />
            <Tab.Screen 
                name="Products"
                component={Products}
                options={{
                    tabBarIcon: ({focused, color, size}) => {
                        return <Ionicons name="planet-outline" color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen 
                name="Boxes"
                component={Boxes}
                options={{
                    tabBarIcon: ({focused, color, size}) => {
                        return <Ionicons name="cube-outline" color={color} size={size} />
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator;