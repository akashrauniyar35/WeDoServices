import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { BackButton } from '../CommonComponents';

const Help = ({ navigation }) => {
    return (
        <View>
            <SafeAreaView />
            <BackButton nav={navigation} />
            <Text>Help</Text>
        </View>
    )
}

export default Help

const styles = StyleSheet.create({})
