import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, Dimensions, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import { BackButton, NextButton } from '../CommonComponents';
import studyRoom from '../Assets/studyroom.png'
import laundryRoom from '../Assets/laundry.png'
import toilet from '../Assets/toilet.png';
import balcony from '../Assets/balcony.png'

const { width, height } = Dimensions.get('screen')
const CleaningAreas = ({ navigation }) => {
    const [studyRoomSelected, setStudyRoomSelected] = useState(false);
    const [laundryRoomSelected, setLaundryRoomSelected] = useState(false);
    const [balconySelected, setBalconySelected] = useState(false);
    const [sharedToiledSelected, setSharedToiledSelected] = useState(false);
    const [garageSelected, setGarageSelected] = useState(false);

    const DATA = [
        {
            id: 0,
            label: 'Study room',
            img: studyRoom,
            isSelected: studyRoomSelected
        },
        {
            id: 1,
            label: 'Laundry',
            img: laundryRoom,
            isSelected: laundryRoomSelected
        },
        {
            id: 2,
            label: 'Separate toilet',
            img: toilet,
            isSelected: sharedToiledSelected
        },
        {
            id: 3,
            label: 'Balcony',
            img: balcony,
            isSelected: balconySelected
        },
        {
            id: 4,
            label: 'Garage',
            img: balcony,
            isSelected: garageSelected
        },
    ]


    const Card = ({ label, img, id, isSelected, description }) => {
        const bg = isSelected ? '#72c174' : '#ed6a65'
        function toggler(id) {
            id == 0 ? setStudyRoomSelected(!studyRoomSelected) :
                id == 1 ? setLaundryRoomSelected(!laundryRoomSelected) :
                    id == 2 ? setSharedToiledSelected(!sharedToiledSelected) :
                        id == 3 ? setBalconySelected(!balconySelected) :
                            id == 4 ? setGarageSelected(!garageSelected) : null
        }

        return (
            <>
                <View style={styles.card}>
                    <Image source={img} resizeMode="cover" style={styles.cardImage} blurRadius={2.5} />
                    <Text style={{ color: '#444444', fontWeight: '700', marginVertical: 5 }}>{label}</Text>
                    <TouchableWithoutFeedback onPress={() => toggler(id)}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: bg, paddingHorizontal: 10, paddingVertical: 3, borderRadius: 5, }}>
                            <Text style={{ color: 'white', fontWeight: '600' }}>{isSelected ? 'Remove' : 'Add'}</Text>
                            <Icon name={isSelected ? "close-circle-outline" : "ios-cart-outline"} color={'white'} size={20} style={{ alignSelf: 'center' }} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>

            </>
        )
    }

    return (
        <>
            <SafeAreaView />
            <BackButton nav={navigation} />
            <View style={styles.container}>
                <Text style={{ fontSize: 20, fontWeight: '700', color: '#444444' }}>Do any the following areas need cleaning too?</Text>
                <FlatList
                    data={DATA}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <Card id={item.id} label={item.label} img={item.img} isSelected={item.isSelected} />
                        )
                    }}
                />
                <NextButton navigation={navigation} routeTo='BookingsAddOns' />
            </View>
        </>
    )
}

export default CleaningAreas

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        marginHorizontal: 20,
        flex: 1,
    },
    cardImage: {
        height: 100,
        width: .35 * width,
        borderRadius: 6,
        overflow: 'hidden'
    },
    cardHeader: {
        fontSize: 25,
        fontWeight: '600',
        color: 'white'
    },
    cardDescription: {
        fontSize: 15,
        fontWeight: '500',
        color: 'white'
    },
    selected: {
        padding: 5,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 10,
        marginLeft: 10,
        position: 'absolute'
    },
    card: {
        padding: 5,
        margin: 15,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 10,
        shadowColor: 'gray',
        shadowOpacity: .5,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 5 },
        backgroundColor: 'white'
    }
})
