import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { BackButton } from '../CommonComponents';

const Notifications = ({ navigation }) => {
    return (
        <View>
            <SafeAreaView />
            <BackButton nav={navigation} />
            <Text>Notifications</Text>
        </View>
    )
}

export default Notifications

const styles = StyleSheet.create({})
