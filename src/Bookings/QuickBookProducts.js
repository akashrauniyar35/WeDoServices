import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, Button, View, SafeAreaView, TouchableWithoutFeedback, ImageBackground, Dimensions, Image, FlatList, Animated, Switch } from 'react-native';
import { BackButton, TickBox } from '../CommonComponents';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/FontAwesome';


import img from '../Assets/laundryRoom.png'
import balcony from '../Assets/balcony.png'
import toilet from '../Assets/toilet.png';
import laundry from '../Assets/laundry.png';
import blinds from '../Assets/BlindsCleaning.png';


const { width, height } = Dimensions.get('screen')
const QuickBooksProducts = ({ navigation, }) => {
    const [visible, setVisible] = useState(false)
    const ITEM_SIZE = width * .72;
    const scrollX = useRef(new Animated.Value(0)).current;
    const topValue = useRef(new Animated.Value(0)).current;
    const dropValue = useRef(new Animated.Value(0)).current;



    const [laundrySelected, setLaundrySelected] = useState(false)
    const [balconySelected, setBalconySelected] = useState(false);
    const [separateToiletSelected, setSeparateToiletSelected] = useState(false)
    const [windowsSelected, setWindowsSelected] = useState(false)
    const [blindSelected, setBlindSelected] = useState(false)
    const [garageSelected, setGarageSelected] = useState(false)
    const [fridgeSelected, setFridgeSelected] = useState(false)
    const [carpetsSelected, setCarpetsSelected] = useState(false)
    const [steamCarpetSelected, setSteamCarpetSelected] = useState(false)
    const [slidingDoorsSelected, setSlidingDoorsSelected] = useState(false)

    const [balconyCount, setBalconyCount] = useState(1);
    const [slidingDoorsCount, setSlidingDoorsCount] = useState(1)
    const [garageCount, setGarageCount] = useState(1)
    const [fridgeCount, setFridgeCount] = useState(1)
    const [blindsCount, setBlindsCount] = useState(1)
    const [windowsCount, setWindowsCount] = useState(1)
    const [laundryRoom, setLaundryRoom] = useState(1);
    const [carpetsCount, setCarpetsCount] = useState(1);
    const [seperateToilet, setSeparateToilet] = useState(1);



    const DATA = [
        {
            id: '00',
            label: 'Laundry room',
            selected: laundrySelected,
            quantity: laundryRoom,
            image: img,
            price: '35',
            rating: '4.5',
            addFunction: false,
            description: 'Most people overlook their laundry room while performing end of lease cleaning. If you want to secure your bond money, make sure you deep clean your laundry room.'
        },
        {
            id: '01',
            label: 'Balcony',
            selected: balconySelected,
            quantity: balconyCount,
            addFunction: true,
            price: '35',
            rating: '4',
            image: balcony,
            description: 'Deep cleaning of balcony and its surroundings.'
        },
        {
            id: '02',
            label: 'Separate Toilet',
            selected: separateToiletSelected,
            quantity: seperateToilet,
            image: toilet,
            price: '35',
            rating: '4',
            description: 'Scrub and disinfect including under seat and around the outside of the bowl.',
            addFunction: true,
        },
        {
            id: '03',
            label: 'Windows',
            selected: windowsSelected,
            image: balcony,
            price: '35',
            rating: '3.5',
            description: 'Clean with washing detergent and dry before finishing off with glass cleaner. Use newspaper to wipe off glass cleaner as this will minimise streaks, leaving your windows and mirrors sparkling. Use a wet cloth to wipe blinds to avoid spreading dust before washing the window.',
            quantity: windowsCount,
            addFunction: true,
            price: '35',
            rating: '4.5',
        },
        {
            id: '07',
            label: 'Sliding doors',
            selected: slidingDoorsSelected,
            quantity: slidingDoorsCount,
            price: '35',
            rating: '4',
            description: 'Wipe clean all ledges including, windows, skirting boards, top of doors, sliding door tracks. per room',
            image: img,
            addFunction: true,
        },
        {
            id: '04',
            label: 'Blinds Cleaning',
            image: blinds,
            price: '35',
            rating: '4.5',
            description: 'Wipe clean all ledges including, windows, skirting boards, top of doors, sliding door tracks. per room',
            selected: blindSelected,
            quantity: blindsCount,
            addFunction: true,
        },
        {
            id: '05',
            label: 'Garage',
            image: img,
            price: '35',
            rating: '4.5',
            selected: garageSelected,
            quantity: garageCount,
            addFunction: true,
        },
        {
            id: '06',
            label: 'Fridge',
            selected: fridgeSelected,
            quantity: fridgeCount,
            price: '35',
            description: 'cleaning inside and outside of the fridge',
            rating: '4.5',
            image: img,
            addFunction: false,
        },
        {
            id: '08',
            label: 'Carpets',
            price: '35',
            rating: '4.5',
            selected: carpetsSelected,
            quantity: carpetsCount,
            image: img,
            steamCarpetSelected: steamCarpetSelected,
            addFunction: false,
            description: 'Vaccume only is part of the service, whereas steam carpet cleaning will cost depending the size of the carpet'

        },
    ];



    const Card = ({ item, index }) => {
        const SPACING = 10

        const addItem = (id) => {
            id === '00' ? setLaundrySelected(!laundrySelected) :
                id === '01' ? setBalconySelected(!balconySelected) :
                    id === '02' ? setSeparateToiletSelected(!separateToiletSelected) :
                        id === '03' ? setWindowsSelected(!windowsSelected) :
                            id === '07' ? setSlidingDoorsSelected(!slidingDoorsSelected) :
                                id === '04' ? setBlindSelected(!blindSelected) :
                                    id === '05' ? setGarageSelected(!garageSelected) :
                                        id === '06' ? setFridgeSelected(!fridgeSelected) :
                                            id === '08' ? setCarpetsSelected(!carpetsSelected) : null
        }

        const increaseItem = (id) => {
            id === '00' ? setLaundryRoom(laundryRoom + 1) :
                id === '01' ? setBalconyCount(balconyCount + 1) :
                    id === '02' ? setSeparateToilet(seperateToilet + 1) :
                        id === '03' ? setWindowsCount(windowsCount + 1) :
                            id === '04' ? setBlindsCount(blindsCount + 1) :
                                id === '05' ? setGarageCount(garageCount + 1) :
                                    id === '06' ? setFridgeCount(fridgeCount + 1) :
                                        id === '07' ? setSlidingDoorsCount(slidingDoorsCount + 1) :
                                            id === '08' ? setCarpetsCount(carpetsCount + 1) : null
        }

        const decreaseItem = (id) => {
            id === '00' ? setLaundryRoom(laundryRoom - 1) :
                id === '01' ? setBalconyCount(balconyCount - 1) :
                    id === '02' ? setSeparateToilet(seperateToilet - 1) :
                        id === '03' ? setWindowsCount(windowsCount - 1) :
                            id === '04' ? setBlindsCount(blindsCount - 1) :
                                id === '05' ? setGarageCount(garageCount - 1) :
                                    id === '06' ? setFridgeCount(fridgeCount - 1) :
                                        id === '07' ? setSlidingDoorsCount(slidingDoorsCount - 1) :
                                            id === '08' ? setCarpetsCount(carpetsCount - 1) : null
        }


        const inputRange = [
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
            (index + 1) * ITEM_SIZE
        ];

        const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [50, 0, 50]
        })

        return (
            <View style={{ width: ITEM_SIZE }}>
                <Animated.View style={{ marginHorizontal: SPACING, padding: SPACING * 2, alignItems: 'center', backgroundColor: 'white', borderRadius: 10, transform: [{ translateY }] }}>
                    <Image source={item.image} resizeMode='cover' style={styles.img} />

                    <View style={{ marginTop: 5, backgroundColor: 'white', alignSelf: 'flex-start', }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 20, fontWeight: '600', color: '#444444', }} numberOfLines={2}>{item.label}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <FIcon name='star' color='#f4de7a' size={18} />
                                <Text style={{ fontSize: 15, fontWeight: '700', color: '#444444', marginLeft: 10, }}>{item.rating}</Text>
                            </View>
                        </View>

                        {item.id === '08' ?
                            <View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#2e2e2e', }}>Vaccume</Text>
                                    <Switch
                                        style={{ transform: [{ scaleX: .6 }, { scaleY: .6 }] }}
                                        trackColor={{ false: "transparent", true: "transparent" }}
                                        thumbColor={steamCarpetSelected ? "#72c174" : "#ed6a65"}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={() => setSteamCarpetSelected(!steamCarpetSelected)}
                                        value={steamCarpetSelected}
                                    />
                                    <Text style={{ color: '#2e2e2e', }}>Steam Cleaning</Text>
                                </View>
                            </View> : null
                        }


                        {item.id === '08' & steamCarpetSelected ?
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, justifyContent: 'space-between', }}>
                                <Text style={{ fontSize: 12, color: '#2e2e2e', width: '45%' }}>Quantity</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', width: '55%', justifyContent: 'space-between' }}>
                                    <TouchableWithoutFeedback onPress={() => increaseItem(item.id)}>
                                        <Icon name='md-add-circle' color='#686BFF' size={25} />
                                    </TouchableWithoutFeedback>
                                    <Text style={{ fontSize: 20, fontWeight: '600', color: '#2e2e2e', }}>{item.quantity}</Text>
                                    <TouchableWithoutFeedback onPress={() => decreaseItem(item.id)}>
                                        <Icon name='md-remove-circle' color='#686BFF' size={25} />
                                    </TouchableWithoutFeedback>
                                </View>
                            </View>


                            : null

                        }

                        {item.id === '08' ? null :
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, justifyContent: 'space-between', }}>
                                <Text style={{ fontSize: 12, color: '#2e2e2e', width: '45%' }}>Quantity</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', width: '55%', justifyContent: 'space-between' }}>
                                    <TouchableWithoutFeedback onPress={() => increaseItem(item.id)}>
                                        <Icon name='md-add-circle' color='#686BFF' size={25} />
                                    </TouchableWithoutFeedback>
                                    <Text style={{ fontSize: 20, fontWeight: '600', color: '#2e2e2e', }}>{item.quantity}</Text>
                                    <TouchableWithoutFeedback onPress={() => decreaseItem(item.id)}>
                                        <Icon name='md-remove-circle' color='#686BFF' size={25} />
                                    </TouchableWithoutFeedback>
                                </View>
                            </View>

                        }


                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                            <View style={{ alignItems: 'center', flexDirection: 'row', }}>
                                <Text style={{ fontSize: 25, fontWeight: '600', color: '#454545', marginRight: 5, }}>$</Text>
                                <Text style={{ fontSize: 25, fontWeight: '600', color: '#454b4f', }}>{item.price}</Text>
                            </View>

                            <TouchableWithoutFeedback onPress={() => addItem(item.id)}>
                                <View style={{ backgroundColor: item.selected ? '#72c174' : '#ed6a65', alignItems: 'center', borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5, width: '55%', paddingHorizontal: 10, }}>
                                    <Icon name='ios-cart-outline' size={25} color='#fff' />
                                    <Text style={{ fontSize: 12, color: '#fff', fontWeight: '700' }} numberOfLines={3}>{item.selected ? 'Remove' : 'Add'}</Text>
                                </View>
                            </TouchableWithoutFeedback>

                        </View>
                        <Text style={{ fontSize: 12, color: '#2e2e2e', marginVertical: 10, textAlign: 'justify' }} numberOfLines={5}>{item.description}</Text>
                    </View>

                </Animated.View >
            </View >
        )
    }



    const ContinueButton = () => {
        useEffect(() => {
            Animated.timing(topValue, {
                toValue: -10,
                duration: 1000,
                useNativeDriver: false
            }).start();
        }, [topValue])

        return (
            <TouchableWithoutFeedback onPress={() => navigation.navigate('BookingsFrom')}>
                <Animated.View style={{ top: topValue }}>
                    <View style={{ backgroundColor: '#686BFF', alignItems: 'center', position: 'absolute', bottom: 20, width: '60%', alignSelf: 'center', borderRadius: 5, padding: 5, paddingVertical: 10, }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>Continue</Text>
                    </View>
                </Animated.View>
            </TouchableWithoutFeedback>
        )
    }


    return (
        <View style={styles.container}>
            <SafeAreaView />
            <BackButton nav={navigation} />
            <Animated.FlatList
                data={DATA}
                horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                decelerationRate={0}
                pagingEnabled
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
                scrollEventThrottle={16}
                bounces={false}
                snapToInterval={ITEM_SIZE}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ backgroundColor: 'transparent', alignItems: 'center', marginLeft: 50, paddingRight: 100 }}
                renderItem={({ item, index }) => {

                    return (
                        <Card item={item} index={index} />
                    )
                }}

                onEndReached={() => {
                    setVisible(true)
                }}
            />

            {
                visible ? <ContinueButton /> : null
            }



        </View>
    )
}

export default QuickBooksProducts

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'pink',
    },
    img: {
        width: '100%',
        height: 300,
        borderRadius: 10,
    },
})
