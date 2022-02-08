import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import { BackButton, NextButton } from '../CommonComponents';

const Carpets = ({ navigation }) => {
    const [vaccumeOnly, setVaccumeOnly] = useState(false);
    const [steamVaccume, setSteamVaccume] = useState(false);
    const [noCarpets, setNoCarpets] = useState(false);
    const [bedroomCount, setBedroomCount] = useState(1);
    const [livingCount, setLivingCount] = useState(1);
    const [hallwayCount, setHallwayCount] = useState(1);
    const [staircaseCount, setStaircaseCount] = useState(1);


    const DATA = [
        {
            id: 0,
            label: 'Vaccumed Only',
            description: 'Part of the service',
            isSelected: vaccumeOnly,
        },
        {
            id: 1,
            label: 'Steam Cleaned',
            description: 'Steam Carpet Cleaning/Hot Water Extraction is the most effective carpet cleaning method.',
            isSelected: steamVaccume,
        },
        {
            id: 2,
            label: 'I do not have carpets',
            description: null,
            isSelected: noCarpets,
        },
    ]

    const RadioButtons = ({ id, isSelected, label, description }) => {

        function toggler(id) {
            id === 0 ? setVaccumeOnly(!vaccumeOnly) & setSteamVaccume(false) & setNoCarpets(false) :
                id === 1 ? setSteamVaccume(!steamVaccume) & setVaccumeOnly(false) & setNoCarpets(false) :
                    id === 2 ? setNoCarpets(!noCarpets) & setVaccumeOnly(false) & setSteamVaccume(false) : null
        }


        return (
            <>
                <TouchableOpacity onPress={() => toggler(id)}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>

                        <View style={{ alignItems: 'center', marginBottom: 5, width: '10%', }}>
                            <View style={[styles.button, isSelected ? null : { borderWidth: .5 }]}>
                                {isSelected ? <View style={styles.radioOn} /> : null}
                            </View>
                        </View>

                        <View style={{ width: '90%' }}>
                            <Text style={{ marginLeft: 10, fontSize: 15, fontWeight: '600', color: '#1e1e1e', }}>{label}</Text>
                            {id == 0 || id == 1 ? <Text style={{ marginLeft: 10, fontSize: 13, marginTop: 5, color: '#2e2e2e' }}>{description}</Text> : null}
                        </View>

                    </View>
                </TouchableOpacity>

                {id === 1 & isSelected ?
                    <View style={styles.hiddenView}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, borderBottomWidth: .2, marginBottom: 10, }}>
                            <Text style={{ fontSize: 15, color: '#1e1e1e' }}>Bedroom(s)</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                <TouchableOpacity onPress={() => setBedroomCount(bedroomCount + 1)} >
                                    <Icon name="add-circle-outline" size={18} color={'#1e1e1e'} />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 20, color: '#1e1e1e', marginHorizontal: 10, }}>{bedroomCount}</Text>
                                <TouchableOpacity onPress={() => setBedroomCount(bedroomCount - 1)} >
                                    <Icon name="remove-circle-outline" size={18} color={'#1e1e1e'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, borderBottomWidth: .2, marginBottom: 10, }}>
                            <Text style={{ fontSize: 15, color: '#1e1e1e' }}>Living room(s)</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                <TouchableOpacity onPress={() => setLivingCount(livingCount + 1)} >
                                    <Icon name="add-circle-outline" size={18} color={'#1e1e1e'} />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 20, color: '#1e1e1e', marginHorizontal: 10, }}>{livingCount}</Text>
                                <TouchableOpacity onPress={() => setLivingCount(livingCount - 1)}>
                                    <Icon name="remove-circle-outline" size={18} color={'#1e1e1e'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, borderBottomWidth: .2, marginBottom: 10, }}>
                            <Text style={{ fontSize: 15, color: '#1e1e1e' }}>Hallway(s)</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                <TouchableOpacity onPress={() => setHallwayCount(hallwayCount + 1)}>
                                    <Icon name="add-circle-outline" size={18} color={'#1e1e1e'} />
                                </TouchableOpacity >
                                <Text style={{ fontSize: 20, color: '#1e1e1e', marginHorizontal: 10, }}>{hallwayCount}</Text>
                                <TouchableOpacity onPress={() => setHallwayCount(hallwayCount - 1)}>
                                    <Icon name="remove-circle-outline" size={18} color={'#1e1e1e'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, borderBottomWidth: .2, }}>
                            <Text style={{ fontSize: 15, color: '#1e1e1e' }}>Staircase(s)</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                <TouchableOpacity onPress={() => setStaircaseCount(staircaseCount + 1)}>
                                    <Icon name="add-circle-outline" size={18} color={'#1e1e1e'} />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 20, color: '#1e1e1e', marginHorizontal: 10, }}>{staircaseCount}</Text>
                                <TouchableOpacity onPress={() => setStaircaseCount(staircaseCount - 1)}>
                                    <Icon name="remove-circle-outline" size={18} color={'#1e1e1e'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    : null}

            </>
        )
    }


    return (
        <>
            <SafeAreaView />
            <BackButton nav={navigation} />
            <View style={styles.container}>
                <Text style={{ fontSize: 20, fontWeight: '700', color: '#444444', marginBottom: 10, }}>How would you like your carpets to be cleaned?</Text>

                <FlatList
                    data={DATA}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <RadioButtons id={item.id} label={item.label} isSelected={item.isSelected} description={item.description} />
                        )
                    }}
                />
                <NextButton navigation={navigation} routeTo='ServiceDetails' />
            </View>
        </>
    )
}

export default Carpets

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        marginHorizontal: 20,
        justifyContent: 'space-between',
        flex: 1
    },
    hiddenView: {
        width: '90%',
        alignSelf: 'flex-end',
        marginBottom: 20,
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
    description: {

    },
    noDescription: {

    }
})
