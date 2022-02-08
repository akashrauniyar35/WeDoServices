import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const Radios = ({ label, property, onPress, studioSelected, unitSelected, houseSelected }) => {

    console.log(property, ' ', studioSelected, unitSelected, houseSelected)

    const [bedrooms, setBedrooms] = useState(1)
    const [bathrooms, setBathrooms] = useState(1)
    const [floors, setFloors] = useState(1)



    const UnitAddons = () => {
        return (
            <View>
                <View style={{ marginBottom: 10, }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
                        <Text style={{ fontSize: 15, fontWeight: '500', marginLeft: 40 }}>Bedroom(s)</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                            <TouchableWithoutFeedback onPress={() => setBedrooms(bedrooms + 1)}>
                                <Icon name="add-circle-outline" size={30} />
                            </TouchableWithoutFeedback>

                            <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>{bedrooms}</Text>

                            <TouchableWithoutFeedback onPress={() => setBedrooms(bedrooms - 1)}>
                                <Icon name="remove-circle-outline" size={30} />
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>
                <View style={{ marginBottom: 10, }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
                        <Text style={{ fontSize: 15, fontWeight: '500', marginLeft: 40 }}>Bathroom(s)</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableWithoutFeedback onPress={() => setBathrooms(bathrooms + 1)}>
                                <Icon name="add-circle-outline" size={30} />
                            </TouchableWithoutFeedback>
                            <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>{bathrooms}</Text>
                            <TouchableWithoutFeedback onPress={() => setBathrooms(bathrooms - 1)}>
                                <Icon name="remove-circle-outline" size={30} />
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>
            </View >
        )
    };

    const HouseAddon = () => {
        return (
            <View>
                <View style={{ marginBottom: 10, }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
                        <Text style={{ fontSize: 15, fontWeight: '500', marginLeft: 40 }}>Bedroom(s)</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                            <TouchableWithoutFeedback onPress={() => setBedrooms(bedrooms + 1)}>
                                <Icon name="add-circle-outline" size={30} />
                            </TouchableWithoutFeedback>

                            <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>{bedrooms}</Text>

                            <TouchableWithoutFeedback onPress={() => setBedrooms(bedrooms - 1)}>
                                <Icon name="remove-circle-outline" size={30} />
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>
                <View style={{ marginBottom: 10, }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
                        <Text style={{ fontSize: 15, fontWeight: '500', marginLeft: 40 }}>Bathroom(s)</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableWithoutFeedback onPress={() => setBathrooms(bathrooms + 1)}>
                                <Icon name="add-circle-outline" size={30} />
                            </TouchableWithoutFeedback>
                            <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>{bathrooms}</Text>
                            <TouchableWithoutFeedback onPress={() => setBathrooms(bathrooms - 1)}>
                                <Icon name="remove-circle-outline" size={30} />
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>
                <View style={{ marginBottom: 10, }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
                        <Text style={{ fontSize: 15, fontWeight: '500', marginLeft: 40 }}>Floor(s)</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                            <TouchableWithoutFeedback onPress={() => setFloors(floors + 1)} >
                                <Icon name="add-circle-outline" size={30} />
                            </TouchableWithoutFeedback>
                            <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>{floors}</Text>
                            <TouchableWithoutFeedback onPress={() => setFloors(floors - 1)}>
                                <Icon name="remove-circle-outline" size={30} />
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>
            </View >
        )
    }








return (
    <View style={styles.container}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <View style={label === property ? styles.radioOn : styles.radioOff} />
            </TouchableOpacity>
            <Text style={styles.label}>{label}</Text>

        </View>

        <View style={styles.addOns}>

            {
               label && property === 'Unit' && unitSelected ? <UnitAddons /> : null
            }


        </View>

    </View>
)
}

export default Radios

const styles = StyleSheet.create({
    container: {
        padding: 10
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
    addOns: {
    }
})
