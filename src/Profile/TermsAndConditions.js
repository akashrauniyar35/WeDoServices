import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { BackButton } from '../CommonComponents';

const TermsAndConditions = ({ navigation }) => {
    return (
        <View>
            <SafeAreaView />
            <BackButton nav={navigation} />
            <Text>TermsAndConditions</Text>
        </View>
    )
}

export default TermsAndConditions

const styles = StyleSheet.create({})
