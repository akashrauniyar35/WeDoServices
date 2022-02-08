import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Login, Signup, Carousel, ForgotPassword, SignupWithUs } from './';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Carousel" component={Carousel} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="SignupWithUs" component={SignupWithUs} />
        </Stack.Navigator>
    );
}

export default MyStack;