import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, SafeAreaView, StatusBar } from 'react-native';
import { BackButton, AuthInputBox, PostCodeSearch } from '../CommonComponents'

const { width, height } = Dimensions.get('screen');

const BookOnline = ({ route, navigation }) => {
    return (
        <>
            <SafeAreaView style={{ backgroundColor: '#add8e6', }} />
            <StatusBar hidden />

            <View style={styles.container}>
                <View style={{ justifyContent: 'flex-end', width }}>
                    <BackButton nav={navigation} />
                </View>
                <Text style={styles.header}>{'Where should we serve you ?'}</Text>
                <View style={styles.form}>
                    <PostCodeSearch label="Full Name" />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#add8e6',
        padding: 20
        // alignItems: 'center',
    },
    header: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: '800'
    },
    form: {
        marginTop: 20,
    }
})
export default BookOnline
