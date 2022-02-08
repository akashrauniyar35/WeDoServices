import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'

import { BackButton, NextButton } from '../CommonComponents';


const Payments = ({ navigation }) => {
    const [price, setPrice] = useState('550.50')

    const PayButton = () => {
        return (
            <TouchableWithoutFeedback>
                <View style={styles.button}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: 'white', alignSelf: 'center' }}>Pay</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }


    return (
        <>
            <SafeAreaView />
            <BackButton nav={navigation} />
            <View style={styles.container}>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: '700', color: '#1E1E1E', marginBottom: 20, }}>Your payments</Text>
                    <View style={{ marginBottom: 10, }}>
                        <Text style={{ color: 'gray', marginBottom: 5, }}>Price</Text>
                        <Text style={{ color: '#9CD91D', fontSize: 18, fontWeight: '600' }}>$ {price}</Text>
                    </View>

                    <TextInput placeholder="Name on card" placeholderTextColor={'#454b4f'} style={styles.streetAddress} />
                    <TextInput placeholder="Number" style={styles.streetAddress} placeholderTextColor={'#454b4f'} keyboardType='numeric' />
                    <TextInput placeholder="CSV" placeholderTextColor={'#454b4f'} style={[styles.streetAddress, { width: '40%' }]} />
                </View>
                <PayButton />
            </View>
        </>
    )
}

export default Payments

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        marginHorizontal: 20,
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#686BFF',
        padding: 10,
        borderRadius: 5,
        marginTop: 50,
    },
    streetAddress: {
        marginBottom: 10,
        backgroundColor: '#eff1f2',
        width: '100%',
        borderRadius: 5,
        padding: 10,
        flexDirection: 'row',
    },
})
