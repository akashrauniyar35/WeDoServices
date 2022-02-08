import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Bookings from './Bookings';
import BookOnline from './BookOnline';


import CleaningAreas from './CleaningAreas';
import Carpets from './BookingsCarpets';

import QuickBookings from './QuickBook';
import BookingsForm from './BookingsForm';
import QuickBookProducts from './QuickBookProducts'
import Payments from './Payments';
import Tabs from '../BottomTabNav/BottomTabNav';



const Stack = createStackNavigator();


export default function BookingStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#add8e6' } }}>
            <Stack.Screen name='Bookings' component={Bookings} />
    
            
            <Stack.Screen name='QuickBookings' component={QuickBookings} />
            <Stack.Screen name='BookingsForm' component={BookingsForm} />
            <Stack.Screen name='QuickBookProducts' component={QuickBookProducts} />
            <Stack.Screen name='BookOnline' component={BookOnline} />
            <Stack.Screen name='Payments' component={Payments} />
         
            <Stack.Screen name='Carpets' component={Carpets} />
            <Stack.Screen name='CleaningAreas' component={CleaningAreas} />

        </Stack.Navigator>
    )
}