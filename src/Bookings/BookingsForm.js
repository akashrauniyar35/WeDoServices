import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Dimensions, FlatList, TouchableWithoutFeedback, SafeAreaView, Button } from 'react-native';
import DatePicker from 'react-native-date-picker'
import { BackButton, NextButton } from '../CommonComponents'

import Icon from 'react-native-vector-icons/Ionicons';

const { height, width } = Dimensions.get('screen');


const DropDown = () => {
    return (
        <>
            <View style={{}}>
                {/* <View style={{ width: '100%', backgroundColor: 'white', padding: 10, borderRadius: 5, }}>
                    <TextInput style={{ color: 'gray', fontWeight: '600', }} placeholder={'Choose suburb'} />
                </View> */}
                <View style={styles.suburbCard}>
                    <Text style={{ color: 'gray', fontWeight: '500', }}>Homebush West NSW</Text>
                </View>
                <View style={styles.suburbCard}>
                    <Text style={{ color: 'gray', fontWeight: '500', }}>Strathfiled NSW</Text>
                </View>
                <View style={styles.suburbCard}>
                    <Text style={{ color: 'gray', fontWeight: '500', }}>Lidcombe NSW</Text>
                </View>
            </View>
        </>
    )
};



const BookingsForm = ({ navigation }) => {
    const [date, setDate] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState(null);
    const [timeVisible, setTimeVisible] = useState(false);
    const [postCode, setPostCode] = useState('');
    const [suburbVisible, setSuburbVisible] = useState(false);
    const [selectedSuburb, setSelectedSuburb] = useState(null);
    const [timeSelected, setTimeSelected] = useState(null);
    const [open, setOpen] = useState(false);


    const TimeSelector = () => {
        return (

            <>
                <Text style={{ color: 'black', marginBottom: 5 }}>Please select the time slot?</Text>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-evenly' }}>

                    <TouchableWithoutFeedback onPress={() => setTimeSelected('10:00 AM') & setTimeVisible(false)}>
                        <View style={styles.timeSlots}>
                            <Text style={{ color: '#2e2e2e' }}>11:00 AM</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <View style={styles.timeSlots}>
                        <Text style={{ color: '#2e2e2e' }}>11:00 AM</Text>
                    </View>
                    <View style={styles.timeSlots}>
                        <Text style={{}}>10:00 AM</Text>
                    </View>
                    <View style={styles.timeSlots}>
                        <Text style={{}}>10:00 AM</Text>
                    </View>
                    <View style={styles.timeSlots}>
                        <Text style={{}}>10:00 AM</Text>
                    </View>
                    <View style={styles.timeSlots}>
                        <Text style={{}}>10:00 AM</Text>
                    </View>
                </View>
            </>
        )
    }

    const ContactInfo = () => {
        return (
            <>
                <View style={{ marginBottom: 10, }}>
                    <TextInput placeholder="Contact Name" style={styles.streetAddress} placeholderTextColor={'#2e2e2e'} />
                    <TextInput placeholder="Contact Number" style={styles.streetAddress} keyboardType="numeric" placeholderTextColor={'#2e2e2e'} />
                    <TextInput placeholder="Email" style={styles.streetAddress} keyboardType="email-address" placeholderTextColor={'#2e2e2e'} />
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
                    <Text style={{ fontSize: 20, fontWeight: '700', color: '#444444', marginBottom: 10 }}>Address</Text>

                    <TextInput placeholder="Street address" placeholderTextColor={'#2e2e2e'} style={styles.streetAddress} />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                        <TextInput placeholder="Unit" placeholderTextColor={'#2e2e2e'} style={styles.suiteNo} />
                        <TextInput placeholder="Postcode" style={styles.postCode} placeholderTextColor={'#2e2e2e'} keyboardType='numeric' onChange={(value) => setPostCode(value)} />
                    </View>

                    <View style={{ width: '100%', backgroundColor: '#eff1f2', padding: 10, borderRadius: 5, }}>
                        <TextInput placeholderTextColor={'#2e2e2e'} placeholder={'Choose suburb'} />
                    </View>

                    {/* {postCode.length > 3 ? <DropDown /> : null} */}
                    {/* {postCode == null ? null : postCode > 3 ? <DropDown /> : null} */}


                    <View style={{ marginVertical: 15, }}>
                        <Text style={{ color: '#2e2e2e', }}>When you'd like to schedule this job?</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, }}>
                            <TouchableWithoutFeedback onPress={() => setOpen(true)}>
                                <View style={{ padding: 5, backgroundColor: '#eff1f2', borderRadius: 5, paddingHorizontal: 15, }}>
                                    <Text style={{ color: '#2e2e2e', }}>Date</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <Text style={{ color: '#2e2e2e', marginLeft: 20 }}>{selectedDate == null ? '' : selectedDate.substr(0, 15)}</Text>
                        </View>

                        {timeVisible || timeSelected ?
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, }}>
                                <TouchableWithoutFeedback onPress={() => setTimeVisible(!timeVisible)}>
                                    <View style={{ padding: 5, backgroundColor: '#eff1f2', borderRadius: 5, paddingHorizontal: 15, }}>
                                        <Text style={{ color: '#2e2e2e', }}>Time</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                                <Text style={{ color: '#2e2e2e', marginLeft: 20 }}>{timeSelected == null ? '' : timeSelected}</Text>
                            </View>
                            : null}

                        <DatePicker
                            modal
                            mode={"date"}
                            open={open}
                            date={date}
                            onConfirm={(date) => {
                                setOpen(false)
                                setDate(date)
                                setSelectedDate(date.toString())
                                setTimeVisible(!timeVisible);
                            }}
                            onCancel={() => {
                                setOpen(false)
                            }}
                        />
                    </View>

                    {timeVisible ? <TimeSelector /> : null}
                    <Text style={{ fontSize: 20, fontWeight: '700', color: '#444444', marginBottom: 10 }}>Contact</Text>
                    <ContactInfo />
                </View>
                <NextButton navigation={navigation} routeTo='Payments' />
            </View>

        </>
    )
}

export default BookingsForm

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        marginHorizontal: 20,
        justifyContent: 'space-between',
        borderRadius: 5,
        flex: 1
    },
    label: {
        fontWeight: '600',
        color: '#0047ab',
        marginBottom: 5
    },
    suiteNo: {
        marginBottom: 10,
        backgroundColor: '#eff1f2',
        width: '40%',
        borderRadius: 5,
        padding: 10,
    },
    postCode: {
        marginBottom: 10,
        backgroundColor: '#eff1f2',
        width: '50%',
        borderRadius: 5,
        padding: 10,
    },
    streetAddress: {
        marginBottom: 10,
        backgroundColor: '#eff1f2',
        width: '100%',
        borderRadius: 5,
        padding: 10,
    },
    timeSlots: {
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#eff1f2',
        marginBottom: 5
    },
    suburbCard: {
        padding: 10,
        borderBottomWidth: .2,
        marginBottom: 5,

    }

})