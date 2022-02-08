import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Carousel, Login, ForgotPassword, Signup } from './src/OnboardingCarousel';
import AuthStack from './src/OnboardingCarousel/AuthStack';
import BottomTabNav from './src/BottomTabNav/BottomTabNav';
import Stack from './src/test/stack'
import QuickProducts from './src/Bookings/ServiceDetails';



const App = () => {

  return (
    <NavigationContainer>
        <View style={styles.container}>
          {/* <Stack /> */}
          {/* <QuickProducts /> */}
          <AuthStack />
        </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});

export default App;
