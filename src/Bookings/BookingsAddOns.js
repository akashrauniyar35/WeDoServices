import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity, FlatList } from 'react-native'

import { BackButton, NextButton } from '../CommonComponents';

const { width, height } = Dimensions.get('screen')
const BookingsAddOns = ({ navigation }) => {
    const [outsideWindows, setOutsideWindows] = useState(false);
    const [wallSpots, setWallSpots] = useState(false);
    const [blinds, setBlinds] = useState(false);
    const [fridge, setFridge] = useState(false);


    const DATA = [
        {
            id: 0,
            label: 'Outside Windows Cleaning (per window)',
            description: 'Shampoo cleaning of outside window, this is not included in the EOL package.',
            isSelected: outsideWindows
        },
        {
            id: 1,
            label: 'Wall Spot Cleaning',
            description: 'The cleaners will examine the spots and the type of wall and use the most appropriate treatement.',
            isSelected: wallSpots
        },
        {
            id: 2,
            label: 'Blinds Wiping',
            description: 'The cleaners will dust and wipe down of blinds.',
            isSelected: blinds
        },
        {
            id: 3,
            label: 'Fridge Cleaning',
            description: 'The cleaners will clean inside and oustide of the fridge.',
            isSelected: fridge
        }
    ];




    const RadioButtons = ({ id, isSelected, label, description }) => {

        function toggler(id) {
            id == 0 ? setOutsideWindows(!outsideWindows) :
                id == 1 ? setWallSpots(!wallSpots) :
                    id == 2 ? setBlinds(!blinds) :
                        id == 3 ? setFridge(!fridge) : null
        }

        return (
            <TouchableOpacity onPress={() => toggler(id)}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
                        <View style={[styles.button, isSelected ? null : { borderWidth: .5 }]}>
                            {isSelected ? <View style={styles.radioOn} /> : null}
                        </View>
                    </View>
                    <View>
                        <Text style={{ marginLeft: 10, fontSize: 15, fontWeight: '600', color: '#1e1e1e1', }}>{label}</Text>
                        <Text style={{ marginLeft: 10, fontSize: 13, marginTop: 5, color: '#2e2e2e', }}>{description}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <>
            <SafeAreaView />
            <BackButton nav={navigation} />
            <View style={styles.container}>
                <Text style={{ fontSize: 20, fontWeight: '700', color: '#444444' }}>Most of our clinets also add:</Text>

                <FlatList
                    data={DATA}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <RadioButtons id={item.id} label={item.label} isSelected={item.isSelected} description={item.description} />
                        )
                    }}
                />
                <NextButton navigation={navigation} routeTo='Carpets' />
            </View>
        </>
    )
}

export default BookingsAddOns

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        marginHorizontal: 20,
        flex: 1,
    },
    button: {
        height: 30,
        width: 30,
        borderRadius: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioOn: {
        width: 20, height: 20, backgroundColor: 'gray', borderRadius: 50
    },
    radioOff: {
    },
    label: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: '700'
    },
})
