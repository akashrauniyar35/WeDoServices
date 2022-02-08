import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './Profile';
import Account from './Account';
import Notifications from './Notifications';
import Help from './Help';
import TermsAndConditions from './TermsAndConditions';

const Stack = createStackNavigator();
export default function ProfileStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#add8e6' } }} >
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="Help" component={Help} />
            <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
        </Stack.Navigator>
    )
}