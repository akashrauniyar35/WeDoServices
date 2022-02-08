import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, View, Dimensions, SafeAreaView, Modal, Image, FlatList, Animated, TouchableWithoutFeedback, Pressable, ImageBackground, TouchableOpacity, TouchableWithoutFeedbackBase, Easing } from 'react-native'
import { BlurView } from "@react-native-community/blur";
import Icon from 'react-native-vector-icons/Ionicons'
import img from '../Assets/notificaitonsGradient.png'
import gradient from '../Assets/gradient.png'
import balcony from '../Assets/balcony.png'
import carpet from '../Assets/carpet.png'


const { width, height } = Dimensions.get('screen');

const Dashboard = () => {
    const shakeValue = useRef(new Animated.Value(0)).current;

    const [informationModal, setInformationModal] = useState(false);
    const [modalData, setModalData] = useState(null);


    const [balconySelected, setBalconySelected] = useState(false);
    const [laundrySelected, setLaundrySelected] = useState(false);
    const [garageSelected, setGarageSelected] = useState(false);
    const [studySelected, setStudySelected] = useState(false);
    const [seperateToilet, setSeperateToilet] = useState(false);
    const [fridgeSelected, setFridgeSelected] = useState();


    const [steamCarpetSelected, setSteamCarpetSelected] = useState(false);


    const PRODUCTS = [
        {
            id: '00',
            name: 'Balcony cleaning',
            rating: '4.5',
            img: balcony,
            bg: '#ffb8b7',
            selected: balconySelected,
        },
        {
            id: '01',
            name: 'Laundry cleaning',
            rating: '4.5',
            img: balcony,
            bg: '#bcfbff',
            selected: laundrySelected,
        },
        {
            id: '04',
            name: 'Garage',
            rating: '4.5',
            img: balcony,
            bg: '#bfffeb',
            selected: garageSelected,
        },
        {
            id: '03',
            name: 'Study room',
            rating: '4.5',
            img: balcony,
            bg: '#c6d8ff',
            selected: studySelected,
        },
        {
            id: '02',
            name: 'Seperate Toilet',
            rating: '3.5',
            img: carpet,
            bg: '#ffffce',
            selected: seperateToilet,
        },
        {
            id: '05',
            name: 'Fridge',
            rating: '3.5',
            img: carpet,
            bg: '#cefffe',
            selected: fridgeSelected,
        },
    ]

    const DESK = [
        {
            id: '00',
            label: 'Keys',
            description: 'Do you require dropping off your property keys? Please let your cleaners know before hand when they contact you prior to your booking date.',
            bg: '#104891',
            icon: 'ios-key-outline'
        },
        {
            id: '01',
            label: 'Help',
            bg: '#E86830',
            description: 'Please let us know how we can help? contact bla bla bal',
            icon: 'ios-help-outline'
        },
        {
            id: '02',
            label: 'Info',
            bg: '#493d3d',
            description: 'here will be the enformation things customers need to do before we send cleaners for example, removal of furnutures, turning of electronics, ',
            icon: 'ios-information-outline'
        },
    ];


    const ContactOptions = () => {
        return (
            <View>
                <Text style={{ fontSize: 20, fontWeight: '700', color: '#444444', }}>Contact us</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 10, }}>
                    <View style={{ backgroundColor: '#d3213c', width: '45%', padding: 10, borderRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <Icon name='ios-mail' size={30} color={'#fff'} />
                        <Text style={{ color: 'white', fontSize: 25, fontWeight: '600' }}>email</Text>
                    </View>
                    <View style={{ backgroundColor: '#22ad22', width: '45%', padding: 10, borderRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <Icon name='ios-call' size={30} color={'#fff'} />
                        <Text style={{ color: 'white', fontSize: 25, fontWeight: '600' }}>Call</Text>
                    </View>
                </View>
            </View>
        )
    }


    const NotificationsCard = () => {

        Animated.loop(
            Animated.sequence([
                Animated.timing(shakeValue, { toValue: 3, duration: 100, useNativeDriver: true }),
                Animated.timing(shakeValue, { toValue: -3, duration: 100, useNativeDriver: true }),
                Animated.timing(shakeValue, { toValue: 3, duration: 100, useNativeDriver: true }),
                Animated.timing(shakeValue, { toValue: 0, duration: 100, useNativeDriver: true })
            ])
        ).start();


        return (
            <View style={styles.upcomings}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: '700', color: '#444444', }}>Upcomings</Text>
                    <Animated.View style={{ transform: [{ translateX: shakeValue }] }}>
                        <Icon name='ios-notifications' color='#686BFF' size={25} />
                    </Animated.View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 7, }}>
                    <Icon name='ios-location-outline' color='#d3213c' size={18} />
                    <Text style={{ fontSize: 13, fontWeight: '500', color: '#2e2e2e', marginLeft: 15 }}>53 Mosely St Strathfield NSW 2135</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 7, }}>
                    <Icon name='ios-receipt-outline' size={18} color='#22ad22' />
                    <Text style={{ fontSize: 13, color: '#2e2e2e', fontWeight: '500', marginLeft: 15 }}>End of lease cleaning</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 7, }}>
                    <Icon name='ios-calendar-outline' color='#104891' size={18} />
                    <Text style={{ fontSize: 13, fontWeight: '500', color: '#2e2e2e', marginLeft: 15 }}>Friday, 18th Dec 2021 8:30 AM</Text>
                </View>

            </View>

        )
    }

    const InformationModal = (item) => {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={informationModal}
                onRequestClose={() => { setInformationModal(!informationModal) }}
            >
                <BlurView
                    style={styles.absolute}
                    blurType="light"
                    blurAmount={10}
                    reducedTransparencyFallbackColor="white"
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 25, fontWeight: '700', color: '#444444' }}>{modalData ? modalData.label : null}</Text>

                                <Pressable onPress={() => setInformationModal(!informationModal)}>
                                    <Icon name='md-close-circle' size={25} color='#2e2e2e' />
                                </Pressable>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, textAlign: 'left' }}>
                                <Text style={{ color: '#2e2e2e', }}>{modalData ? modalData.description : null}</Text>
                            </View>
                        </View>
                    </View>
                </BlurView>

            </Modal>

        )
    }


    const Products = ({ item }) => {
        const bg = item.selected ? '#72c174' : 'white'
        const textColor = item.selected ? '#fff' : '#2e2e2e'

        function addItem(id) {
            id === '00' ? setBalconySelected(!balconySelected) :
                id === '01' ? setLaundrySelected(!laundrySelected) :
                    id === '04' ? setGarageSelected(!garageSelected) :
                        id === '03' ? setStudySelected(!studySelected) :
                            id === '02' ? setSeperateToilet(!seperateToilet) :
                                id === '05' ? setFridgeSelected(!fridgeSelected) : null
        }

        return (
            <View style={[styles.productsCard, { backgroundColor: item.bg }]}>
                <ImageBackground source={item.img} resizeMode='cover' style={{ width: width * .35, height: width * .25, }} imageStyle={{ borderRadius: 10 }} blurRadius={2}>
                    <View style={{ position: 'absolute', top: 5, right: 6, alignItems: 'center', flexDirection: 'row', padding: 2, backgroundColor: '#444444', borderRadius: 5 }}>
                        <Icon name='ios-star' size={12} color='#ffdf4f' />
                        <Text style={{ fontSize: 12, fontWeight: '400', color: 'white', marginLeft: 5 }}>{item.rating}</Text>
                    </View>
                </ImageBackground >

                <View style={{}}>
                    <Text style={{ fontSize: 12, color: '#2e2e2e', marginLeft: 5, marginTop: 5, }}>{item.name}</Text>

                    <View style={{ backgroundColor: bg, borderRadius: 5, marginVertical: 5, padding: 5 }}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 5, }} onPress={() => addItem(item.id)} >
                            <Text style={{ fontSize: 12, color: textColor, }}>{item.selected ? 'Added' : 'Add to cart'}</Text>
                            <Icon name={item.selected ? 'ios-checkmark-circle-outline' : 'ios-cart-outline'} size={20} color={textColor} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        )
    }

    const InfoItems = ({ item }) => {

        const onPress = () => {
            setInformationModal(!informationModal)
            setModalData(item)
        }
        return (
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={styles.topShadow}>
                    <View style={styles.bottomShadow}>
                        <View style={{ backgroundColor: item.bg, justifyContent: 'center', alignItems: 'center', padding: 5, borderRadius: 50 / 2, width: 50, height: 50 }}>
                            <Icon name={item.icon} size={30} color={'#fff'} />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>



        )
    }


    return (
        <>
            <ImageBackground source={img} resizeMode='cover' style={styles.notiBackground} imageStyle={{}}>
                <View style={{ padding: 10, }}>
                    <SafeAreaView />
                    <Text style={{ color: '#2e2e2e', marginBottom: 5, }}>Hello,</Text>
                    <Text style={{ fontSize: 20, fontWeight: '700', color: '#444444', }}>Michael Jackson</Text>
                    <NotificationsCard />
                </View>
            </ImageBackground>

            <ImageBackground source={gradient} resizeMode='cover' style={styles.products} imageStyle={{ borderTopStartRadius: 15, borderTopEndRadius: 15 }}>


                <View style={{ padding: 10, paddingVertical: 20, }}>
                    <Text style={{ fontSize: 20, fontWeight: '700', color: '#444444',}}>Frequently added</Text>
                    <View style={{ marginHorizontal: -10 }}>
                        <FlatList
                            data={PRODUCTS}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingVertical: 10, marginHorizontal: 10 }}
                            horizontal
                            keyExtrator={(item) => item.key}
                            renderItem={({ item }) => {
                                return (
                                    <Products item={item} />
                                )
                            }}
                        />
                    </View>
                </View>

                <View style={{ justifyContent: 'space-around', flex: 1, padding: 10, }}>



                    <View style={styles.informationDesk}>
                        <Text style={{ fontSize: 20, fontWeight: '700', color: '#444444', }}>Informations</Text>
                        <FlatList
                            data={DESK}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ marginVertical: 10, justifyContent: 'space-around', flex: 1, }}
                            horizontal
                            keyExtrator={(item) => item.key}
                            renderItem={({ item }) => {
                                return (
                                    <InfoItems item={item} />
                                )
                            }}
                        />
                    </View>

                    <ContactOptions />
                </View>
                <InformationModal />

            </ImageBackground>
        </>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    upcomings: {
        alignSelf: 'center',
        marginVertical: 10,
        backgroundColor: 'white',
        width: width * .9,
        borderRadius: 10,
        padding: 15,
        shadowColor: "#454545",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    infoitems: {
        width: 50, height: 50, borderRadius: 50,
        shadowColor: "#454545",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    notiBackground: {
        paddingVertical: 15,
        borderRadius: 10,
        height: height * .32,
        marginBottom: -10
    },
    products: {
        paddingVertical: 5,
        height: height * .6,
        justifyContent: 'space-between'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    notificationsCard: {
        alignSelf: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    productsCard: {
        marginRight: 15,
        borderRadius: 10,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: .25,
        shadowRadius: 2,
    },
    modalView: {
        width: width * .9,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
    },
    informationDesk: {
        // padding: 10, 
        // marginHorizontal: -20
    },

})
