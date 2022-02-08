import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const { width, height } = Dimensions.get('screen');

const Notification = ({ navigation }) => {

    const DATA = [
        {
            id: '00',
            service: 'End of lease cleaning',
            location: '3 50 Bondi Beach NSW 2135',
            bed: '2',
            bath: '1',
            date: '28/11/2021'
        },

    ];

    const NotificationCard = ({ location, service, date, bed, bath }) => {
        console.log(location)
        return (
            <View style={styles.upcomings}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: '600' }}>Upcomings</Text>
                    <Icon name='ios-notifications-outline' size={25} />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8, }}>
                    <Icon name='ios-location-outline' size={18} />
                    <Text style={{ fontSize: 15, fontWeight: '500', marginLeft: 5 }}>{location}</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, }}>
                    <Icon name='ios-receipt-outline' size={18} />
                    <Text style={{ fontSize: 15, fontWeight: '500', marginLeft: 5 }}>{service}</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, }}>
                    <Icon name='ios-calendar-outline' size={18} />
                    <Text style={{ fontSize: 15, fontWeight: '500', marginLeft: 5 }}>{date}</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, marginRight: 10 }}>
                        <Icon name='ios-bed-outline' size={18} />
                        <Text style={{ fontSize: 15, fontWeight: '500', marginLeft: 5 }}>{bed}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, }}>
                        <MIcons name='shower' size={18} />
                        <Text style={{ fontSize: 15, fontWeight: '500', marginLeft: 5 }}>{bath}</Text>
                    </View>
                </View>
            </View>
        )
    }




    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <NotificationCard key={item.id} service={item.service} location={item.location} price={item.price} date={item.date} bed={item.bed} bath={item.bath} />
                    )
                }}

            />
        </SafeAreaView>

    )
}

export default Notification

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
    },
    upcomings: {
        backgroundColor: 'white',
        width: width * .9,
        borderRadius: 10,
        padding: 15,

    }
})
