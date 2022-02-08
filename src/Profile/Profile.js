import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Dimensions, SafeAreaView, TouchableWithoutFeedback, FlatList } from 'react-native';
import DateTimePicker from '../Bookings/DateTimePicker';
import Icon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import LocationSearch from '../CommonComponents/LocationSearch'

const { width, height } = Dimensions.get('screen')

const Profile = ({ navigation }) => {

    const MENUS = [
        {
            id: '00',
            label: 'Notifications',
            icon: 'ios-notifications',
            navigation: 'Notifications',
            iconColor: '#1BA3EB',
            backgroundColor: '#E6F7FF'
        },
        {
            id: '01',
            label: 'Help',
            icon: 'ios-help-circle',
            navigation: 'Help',
            iconColor: '#30b2a1',
            backgroundColor: '#76ff77'
        },
        {
            id: '01',
            label: 'Terms & Conditions',
            icon: 'ios-document-text',
            navigation: 'TermsAndConditions',
            iconColor: '#d83011',
            backgroundColor: '#FEE7ED'
        },
    ]

    const Card = ({ item }) => {
        return (
            <TouchableWithoutFeedback onPress={() => navigation.navigate(item.navigation)}>
                <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center', padding: 5, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ paddingHorizontal: 5.5, paddingVertical: 4.5, backgroundColor: item.backgroundColor, borderRadius: 50 }}>
                            <Icon name={item.icon} size={15} color={item.iconColor} />
                        </View>
                        <Text style={{ fontSize: 14, fontWeight: '500', color: '#454545', marginLeft: 10 }}>{item.label}</Text>
                    </View>
                    <View style={{ padding: 6, backgroundColor: '#F6F5F8', borderRadius: 6, }}>
                        <MIcon name={'keyboard-arrow-right'} size={20} color='#454545' />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    const AccountHeader = () => {
        return (
            <View style={styles.header}>
                <SafeAreaView />
                <TouchableWithoutFeedback >
                    <View style={{ backgroundColor: 'gold', borderRadius: 10, padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name='person-circle-outline' size={35} color='#454545' />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 20, fontWeight: '700', color: '#454545' }}>John Ninja</Text>
                                <Text style={{ fontSize: 12, fontWeight: '500', color: '#b1b1b1' }}>Personal Info</Text>
                            </View>
                        </View>
                        <Icon name='arrow-forward-circle' size={35} color='#454545' />
                    </View>
                </TouchableWithoutFeedback>
            </View>

        )
    };

    const ProfileFooter = () => {
        return (
            <View style={styles.footer}>
                <Text style={{ fontSize: 18, fontWeight: '600', color: '#454545' }}>Settings</Text>
                <FlatList
                    data={MENUS}
                    keyExtractor={(item) => item.key}
                    renderItem={({ item }) => {
                        return (
                            <Card item={item} />
                        )
                    }}
                />


            </View>
        )
    }


    return (
        <View style={styles.container}>
            < AccountHeader />
            <ProfileFooter />
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: .31,
        padding: 10,
        backgroundColor: 'pink'
    },
    footer: {
        marginTop: -10,
        paddingVertical: 20,
        flex: .69,
        backgroundColor: 'white',
        borderTopStartRadius: 15,
        borderTopEndRadius: 15,
        padding: 10,

    }
})
