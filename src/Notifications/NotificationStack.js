import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Notifications from './Notification';

const Stack = createStackNavigator();
export default function NotificationsStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#add8e6' } }} >
            <Stack.Screen name="Notification" component={Notifications} />
        </Stack.Navigator>
    )
}