import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions, SafeAreaView, TouchableWithoutFeedback, Animated } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import QuickBookings from './QuickBook';

const { width, height } = Dimensions.get('screen');

const DATA = [
    {
        id: '0',
        title: 'End of Lease Cleaning',
        description: 'What is End of Lease Cleaning? According to the end of a lease agreement, a tenant is obligated to return the house in a clean and maintained condition before his/her lease runs out. This is called the end of lease/tenancy cleaning. It is a detailed and thorough clean of your rented property.'
    },
    {
        id: '1',
        title: 'House Cleaning',
        description: 'Standard cleaning services include tasks such as vacuuming and mopping the floors, bathroom cleaning, kitchen cleaning, and dusting. ... For example, basic cleaning bathrooms, kitchen, living room, dusting, vacuuming and mopping floors, and so on.'
    },
    {
        id: '2',
        title: 'Carpet Steam Cleaning',
        description: 'Steam Cleaning is also known as Hot Water Extraction Cleaning. The process involves injecting hot water into your carpet with high pressure, then extracting the water out. ... An effective steam cleaner should pre-treat stains and use a pre-spray to break down surface tension in the carpet.'
    },
];



const Bookings = ({ navigation }) => {
    const slideX = useRef(new Animated.Value(width * .9)).current

    const Item = ({ title, description, navigation, id }) => {


        function productNavigator() {
            id == 0 ? navigation.navigate('EOL_Products') : id == 1 ? navigation.navigate('HouseCleaning_Products') : null
        }

        return (
            <TouchableWithoutFeedback onPress={() => productNavigator()}>
                <View style={styles.item}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }


    const renderItem = ({ item }) => (
        <Item title={item.title} description={item.description} navigation={navigation} id={item.id} />
    );

    return (
        <>
            <SafeAreaView style={{ backgroundColor: '#add8e6' }} />
            <View style={styles.container}>
                <QuickBookings onPress={() => navigation.navigate('QuickBooksProducts')} />
                <Text style={{ fontSize: 18, fontWeight: '700', color: '#1E1E1E', marginHorizontal: 10, marginTop: 10, }}>Choose what service best suits you?</Text>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </>
    )
}

export default Bookings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: 'white'
    },
    bannerTitle: { fontSize: 25, fontWeight: '700', alignSelf: 'flex-start' },
    item: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        shadowColor: 'gray',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 5 }
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 5,
        color: '#686BFF'
    },
    description: {
        color: '#454b4f',
        fontSize: 12,
        textAlign: 'justify',

    },

})
