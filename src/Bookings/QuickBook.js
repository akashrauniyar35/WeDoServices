import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View, Dimensions, SafeAreaView, FlatList, Animated, ImageBackground, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import studio from '../Assets/Studio.png'
import unit1 from '../Assets/Unit1bed.png'
import unit2 from '../Assets/Unit2bed.png'

const { width, height } = Dimensions.get('screen');
const DATA = [
    {
        id: '00',
        title: 'Studio Apartment',
        price: '250',
        bed: '1',
        shower: '1',
        image: studio,
    },
    {
        id: '01',
        title: 'One Bed Unit',
        price: '250',
        bed: '1',
        shower: '1', image: unit1,
    },
    {
        id: '02',
        title: '2 Bed Unit',
        price: '350',
        bed: '2',
        shower: '1', image: unit2,
    },
    {
        id: '04',
        title: '2 Bed Unit',
        price: '350',
        bed: '2',
        shower: '2', image: unit2,
    },
    {
        id: '03',
        title: '3 Bed Unit',
        price: '450',
        bed: '3',
        shower: '2', image: unit2,
    },
    {
        id: '05',
        title: '3 Bed Unit',
        price: '450',
        bed: '3',
        shower: '3', image: unit2,
    },
];




const QuickBook = ({ navigation, onPress }) => {
    const scrollX = useRef(new Animated.Value(0)).current
    const ITEM_SIZE = width * .35


    const Cards = ({ item, onPress, }) => {

        return (
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={styles.card} >
                    <ImageBackground source={item.image} resizeMode='cover' style={styles.img} imageStyle={{ borderRadius: 10, }} />
                    <View style={{}}>
                        <Text style={{ marginVertical: 5, fontSize: 13, fontWeight: '600', color: '#1E1E1E' }}>{item.title}</Text>
                        <View style={{ marginBottom: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 5, }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ alignItems: 'center', }}>
                                    <Text style={{ fontSize: 12, fontWeight: '600', color: '#454b4f', marginHorizontal: 10, }}>{item.bed}</Text>
                                    <Text style={{ fontSize: 12, fontWeight: '600', color: '#454b4f', }}>Bed</Text>
                                </View>
                                <View style={{ alignItems: 'center', marginLeft: 10, }}>
                                    <Text style={{ fontSize: 12, fontWeight: '600', color: '#454b4f', }}>{item.shower}</Text>
                                    <Text style={{ fontSize: 12, fontWeight: '600', color: '#454b4f', }}>Bath</Text>
                                </View>
                            </View>
                            <View style={{ backgroundColor: '#686BFF', height: 45, width: 45, borderRadius: 50, marginLeft: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 12, fontWeight: '600', color: 'white', }}>$ {item.price}</Text>
                            </View>
                        </View>
                    </View >
                </View>
            </TouchableWithoutFeedback >

        )
    }

    return (
        <View style={{ backgroundColor: 'transparent', padding: 10, }}>
            <SafeAreaView />
            <Text style={{ fontSize: 18, fontWeight: '700', color: '#1E1E1E', marginBottom: 10 }}>Quick Bookings</Text>

            <View style={{ width: width, alignSelf: 'center', }}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={DATA}
                    contentContainerStyle={{ marginLeft: 15, }}
                    horizontal
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) => {
                        return (
                            <Cards item={item} onPress={onPress} />
                        )
                    }}
                />
            </View>
        </View >
    )
}

export default QuickBook

const styles = StyleSheet.create({
    img: {
        width: width * .35,
        height: width * .25,
    },
    card: {
        padding: 5,
        backgroundColor: 'white',
        marginBottom: 10,
        marginRight: 15,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 5,
        shadowColor: '#444444',
        shadowOpacity: .5,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 5 }
    },
})
