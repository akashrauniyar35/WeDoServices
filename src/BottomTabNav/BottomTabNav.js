import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


import Dashboard from '../Dashboard/Dashboard';
import ProfileStack from '../Profile/ProfileStack';
import BookingStack from '../Bookings/BookingStack';
import Chat from '../Notifications/Chat'

const TabNav = createBottomTabNavigator();
const Stack = createStackNavigator();
const { width, height } = Dimensions.get('screen')
const activeColor = '#fff'
const inActiveColor = 'gray';

export default function BottomTabNav() {
    return (
        <TabNav.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarInactiveTintColor: inActiveColor,
                tabBarActiveTintColor: activeColor,
                tabBarItemStyle: { bottom: 5, height: 40 },
                tabBarStyle: { position: 'absolute', bottom: 15, backgroundColor: '#454545', alignment: 'center',  padding: 10,  height: 50, },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Dashboard') {
                        iconName = focused ? 'ios-apps' : 'ios-apps-outline'
                    } else if (route.name === 'BookingStack') {
                        iconName = focused ? 'ios-calendar' : 'ios-calendar-outline'
                    } else if (route.name === 'Chats') {
                        iconName = focused ? 'ios-chatbubbles' : 'ios-chatbubbles-outline'
                    } else if (route.name === 'ProfileStack') {
                        iconName = focused ? 'ios-person' : 'ios-person-outline'
                    }
                    return <Ionicons name={iconName} size={size} color={color} style={{}} />;
                }

            })
            }>
            <TabNav.Group>
                <TabNav.Screen name="BookingStack" component={BookingStack} />
                <TabNav.Screen name="ProfileStack" component={ProfileStack} />
                <TabNav.Screen name="Dashboard" component={Dashboard} />
                <TabNav.Screen name="Chats" component={Chat} />
            </TabNav.Group>
        </TabNav.Navigator>
    )
}

// function Stack {
//     return(

//     )
// }



