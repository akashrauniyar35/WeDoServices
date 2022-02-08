import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import { BackButton, NextButton } from '../CommonComponents';


const ServiceDetails = ({ navigation }) => {

    const [editable, setEditable] = useState(false);

    const Card = () => {

        const EditFunction = () => {
            return (
                <>
                    <View style={{ backgroundColor: 'orange' }}>
                        <Text>Editable</Text>
                    </View>
                </>
            )
        }

        return (
            <>
                <View>
                    <Text style={{ marginBottom: 10, }}>End of lease cleaning</Text>

                    <View style={{ marginBottom: 10, }}>
                        <Text style={{ marginBottom: 5, }} >Unit</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Text style={{ marginRight: 5, }}>2</Text>
                                <Text>Bedroom(s)</Text>
                            </View>
                            <TouchableWithoutFeedback>
                                <Text style={{ textDecorationLine: 'underline', }}>edit</Text>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Text style={{ marginRight: 5, }}>1</Text>
                                <Text>Bathroom(s)</Text>
                            </View>
                            <TouchableWithoutFeedback>
                                <Text style={{ textDecorationLine: 'underline', }}>edit</Text>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>

                    <View style={{ marginBottom: 10, }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5 }}>
                            <Text style={{ marginRight: 5, }}>Study room</Text>
                            <TouchableWithoutFeedback>
                                <Text style={{ textDecorationLine: 'underline', }}>edit</Text>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5 }}>
                            <Text style={{ marginRight: 5, }}>Laundry</Text>
                            <TouchableWithoutFeedback>
                                <Text style={{ textDecorationLine: 'underline', }}>edit</Text>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5 }}>
                            <Text style={{ marginRight: 5, }}>Separate toilet</Text>
                            <TouchableWithoutFeedback>
                                <Text style={{ textDecorationLine: 'underline', }}>edit</Text>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5 }}>
                            <Text style={{ marginRight: 5, }}>Balcony</Text>
                            <TouchableWithoutFeedback>
                                <Text style={{ textDecorationLine: 'underline', }}>edit</Text>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                            <Text style={{ marginRight: 5, }}>Garage</Text>
                            <TouchableWithoutFeedback>
                                <Text style={{ textDecorationLine: 'underline', }}>edit</Text>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>

                    <View style={{ marginBottom: 10, }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Text style={{ marginRight: 5, }}>3</Text>
                                <Text>Outside Window Cleaning</Text>
                            </View>
                            <TouchableWithoutFeedback>
                                <Text style={{ textDecorationLine: 'underline', }}>edit</Text>
                            </TouchableWithoutFeedback>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5 }}>
                            <Text style={{ marginRight: 5, }}>Wall Spot Cleaning</Text>
                            <TouchableWithoutFeedback>
                                <Text style={{ textDecorationLine: 'underline', }}>edit</Text>
                            </TouchableWithoutFeedback>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Text style={{ marginRight: 5, }}>3</Text>
                                <Text>Blinds Wiping</Text>
                            </View>
                            <TouchableWithoutFeedback>
                                <Text style={{ textDecorationLine: 'underline', }}>edit</Text>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                            <Text style={{ marginRight: 5, }}>Fridge Cleaning</Text>
                            <TouchableWithoutFeedback>
                                <Text style={{ textDecorationLine: 'underline', }}>edit</Text>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>

                    <Text style={{ marginBottom: 10, }}>Carpet(s) vaccumed only</Text>

                    <View style={{ justifyContent: 'space-between', marginBottom: 10, }}>
                        <Text style={{ marginBottom: 5 }}>Carpets Steam Cleaning</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                            <Text style={{ marginRight: 5, }}>3</Text>
                            <Text>carpeted bedroom(s)</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                            <Text style={{ marginRight: 5, }}>1</Text>
                            <Text>carpeted living room(s)</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                            <Text style={{ marginRight: 5, }}>1</Text>
                            <Text>carpeted hallway(s)</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Text style={{ marginRight: 5, }}>1</Text>
                            <Text>carpeted staircase(s)</Text>
                        </View>

                    </View>

                </View>

            </>
        )
    }

    return (
        <>
            <SafeAreaView />
            <BackButton nav={navigation} />
            <View style={styles.container}>

                <View>
                    <Text style={{ fontSize: 20, fontWeight: '700', color: '#444444', marginBottom: 10, }}>Service details:</Text>
                    <Card />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30, alignSelf: 'center' }}>
                    <Text style={{ marginRight: 10, }}>Service charge:</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={{ marginRight: 5, fontSize: 25, fontWeight: '500', color: 'black', }}>$</Text>
                        <Text style={{ fontSize: 25, fontWeight: '700', color: 'black', }}>550.00</Text>
                    </View>
                </View>

                <NextButton navigation={navigation} routeTo='BookingsForm' />
            </View>


        </>
    )
}

export default ServiceDetails

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        marginHorizontal: 20,
        justifyContent: 'space-between',
        flex: 1
    },
})
