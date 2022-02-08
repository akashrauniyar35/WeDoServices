import React from 'react';
import { View, Text, Button } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import QuickBookings from '../Bookings/QuickBookings';
import QuickBooksProducts from '../Bookings/QuickBookProducts';
import BookingsFrom from '../Bookings/BookingsForm';
import Payments from '../Bookings/Payments';
import CleaningAreas from '../Bookings/CleaningAreas';
import EOL_Products from '../Bookings/EOL_Products';
import HouseCleaning_Products from '../Bookings/HouseCleaning_Products'
import BookingsAddOns from '../Bookings/BookingsAddOns';
import Carpets from '../Bookings/BookingsCarpets';
import ServiceDetails from '../Bookings/ServiceDetails';
import BookingsForm from '../Bookings/BookingsForm';

import Bookings from '../Bookings/Bookings';
import Dashboard from '../Dashboard/Dashboard';
import ProfileStack from '../Profile/ProfileStack';
import Chat from '../Notifications/Chat'
import Cart from '../Cart/Cart';




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const activeColor = '#686BFF'
const inActiveColor = 'gray';

function BookingsTab() {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarInactiveTintColor: inActiveColor,
                tabBarActiveTintColor: activeColor,
                tabBarStyle: { position: 'absolute', backgroundColor: 'white', alignment: 'center', padding: 10, },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Dashboard') {
                        iconName = focused ? 'ios-apps' : 'ios-apps-outline'
                    } else if (route.name === 'BookingsTab') {
                        iconName = focused ? 'ios-calendar' : 'ios-calendar-outline'
                    } else if (route.name === 'Cart') {
                        iconName = focused ? 'ios-cart' : 'ios-cart-outline'
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'ios-person' : 'ios-person-outline'
                    }
                    return <Ionicons name={iconName} size={size} color={color} style={{}} />;
                }
            })
            }
        >
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Dashboard" component={Dashboard} />
            <Tab.Screen name="BookingsTab" component={Bookings} />
            <Tab.Screen name="Profile" component={ProfileStack} />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, }} screenOptions={{ cardStyle: { backgroundColor: 'white' }, headerShown: false, }}>
            <Stack.Screen name="Bookings" component={BookingsTab} />
            <Stack.Screen name="EOL_Products" component={EOL_Products} />
            <Stack.Screen name="HouseCleaning_Products" component={HouseCleaning_Products} />
            <Stack.Screen name="CleaningAreas" component={CleaningAreas} />
            <Stack.Screen name="BookingsAddOns" component={BookingsAddOns} />
            <Stack.Screen name="Carpets" component={Carpets} />
            <Stack.Screen name="ServiceDetails" component={ServiceDetails} />
            <Stack.Screen name="BookingsForm" component={BookingsForm} />
            <Stack.Screen name="Payments" component={Payments} />

            {/* <Stack.Screen name="QuickBookings" component={QuickBookings} /> not needed file delete later */}
            <Stack.Screen name="QuickBooksProducts" component={QuickBooksProducts} />
            <Stack.Screen name="BookingsFrom" component={BookingsFrom} />
        </Stack.Navigator>
    );
}
