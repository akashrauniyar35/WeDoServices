import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const Cart = () => {
    const [cartData, setCartData] = useState([]);
    const DATA = [
        {
            id: 0,
            title: 'Laundry room',
            count: 1,
            price: '20'
        },
        {
            id: 1,
            title: 'Study room',
            count: 1,
            price: '50'
        },
        {
            id: 2,
            title: 'Garage',
            count: 1,
            price: '50'
        },
        {
            id: 3,
            title: 'Balcony',
            count: 2,
            price: '40'
        },
        {
            id: 4,
            title: 'Outside Windows cleaning',
            count: 2,
            price: '30'
        },
        {
            id: 5,
            title: 'Blinds Wiping',
            count: 6,
            price: '60'
        },
        {
            id: 6,
            title: 'Carpets Steam Cleaning',
            livingRoom: 1,
            Hallways: 1,
            stairCase: 1
        },
    ]

    useEffect(() => { setCartData(DATA) }, []);
    console.log('this is card Data', cartData);

    const CartItem = () => {
        return (
            <View style={styles.card}>
                <Text style={{ fontSize: 18, color: '#1e1e1e', fontWeight: '600' }}>Unit</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5, }}>
                    <Text style={{ color: '#2e2e2e' }}>Bedroom</Text>
                    <Text style={{ color: '#2e2e2e' }}>2</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                    <Text style={{ color: '#2e2e2e' }}>Bathroom</Text>
                    <Text style={{ color: '#2e2e2e' }}>2</Text>
                </View>
            </View>
        )
    }

    return (
        <>
            <SafeAreaView />
            <View style={styles.container}>
                <CartItem />
            </View>
        </>
    );
};

export default Cart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        padding: 10
    },
    card: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10
    }
});
