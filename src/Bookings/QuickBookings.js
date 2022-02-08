// import React, { useState, useEffect } from 'react'
// import { StyleSheet, Text, View, Dimensions, Image, Modal, Pressable, Button, ScrollView, SafeAreaView, TextInput, FlatList, TouchableWithoutFeedback } from 'react-native'
// import Icon from 'react-native-vector-icons/Ionicons';
// import { TickBox, NextButton } from '../CommonComponents';
// import mastercard from '../Assets/masterCard1.png';
// import amax from '../Assets/amax.png';
// import DatePicker from 'react-native-date-picker';
// import LocationSearch from '../CommonComponents/LocationSearch'

// const { width, height } = Dimensions.get('screen')


// const QuickBookings = ({ navigation, }) => {
//     const [modalVisible, setModalVisible] = useState(false);
//     const [cartModal, setCartModal] = useState(false);
//     const [laundrySelected, setLaundrySelected] = useState(false)
//     const [balconySelected, setBalconySelected] = useState(false);
//     const [balconyCount, setBalconyCount] = useState(1);
//     const [separateToiletSelected, setSeparateToiletSelected] = useState(false)
//     const [windowsSelected, setWindowsSelected] = useState(false)
//     const [slidingDoorsCount, setSlidingDoorsCount] = useState(1)
//     const [garageCount, setGarageCount] = useState(1)
//     const [fridgeCount, setFridgeCount] = useState(1)
//     const [blindsCount, setBlindsCount] = useState(1)
//     const [balconyWindowsCount, setBalconyWindowsCount] = useState(1)
//     const [blindSelected, setBlindSelected] = useState(false)
//     const [garageSelected, setGarageSelected] = useState(false)
//     const [fridgeSelected, setFridgeSelected] = useState(false)
//     const [carpetsSelected, setCarpetsSelected] = useState(false)
//     const [steamCarpetSelected, setSteamCarpetSelected] = useState(false)
//     const [cartOn, setCartOn] = useState(false);
//     const [payMasterCard, setPayMasterCard] = useState(false);
//     const [laundryRoom, setLaundryRoom] = useState(1);
//     const [carpetsCount, setCarpetsCount] = useState(1);
//     const [seperateToilet, setSeparateToilet] = useState(5);
//     const [showDatePicker, setShowDatePicker] = useState(false)
//     const [date, setDate] = useState(new Date())



//     const DATA = [
//         {
//             id: '00',
//             label: 'Laundry room',
//             selected: laundrySelected,
//             quantity: laundryRoom,
//             addFunction: false,
//         },
//         {
//             id: '01',
//             label: 'Balcony',
//             selected: balconySelected,
//             quantity: balconyCount,
//             addFunction: true,
//         },
//         {
//             id: '02',
//             label: 'Separate Toilet',
//             selected: separateToiletSelected,
//             quantity: seperateToilet,
//             addFunction: true,
//         },
//         {
//             id: '03',
//             label: 'Balcony windows (per room)',
//             selected: windowsSelected,
//             quantity: balconyWindowsCount,
//             addFunction: true,
//         },
//         {
//             id: '07',
//             label: 'Sliding doors (per room)',
//             selected: windowsSelected,
//             quantity: slidingDoorsCount,
//             addFunction: true,
//         },
//         {
//             id: '04',
//             label: 'Blinds Cleaning (per set)',
//             selected: blindSelected,
//             quantity: blindsCount,
//             addFunction: true,
//         },
//         {
//             id: '05',
//             label: 'Garage',
//             selected: garageSelected,
//             quantity: garageCount,
//             addFunction: true,
//         },
//         {
//             id: '06',
//             label: 'Fridge - inside and outside',
//             selected: fridgeSelected,
//             quantity: fridgeCount,
//             addFunction: false,
//         },
//         {
//             id: '07',
//             label: 'Carpets',
//             selected: carpetsSelected,
//             quantity: carpetsCount,
//             steamCarpetSelected: steamCarpetSelected,
//             addFunction: false,
//         },
//     ];

//     const [BookingsData, setBookingsData] = useState(DATA);

//     const QUICKBOOKINGS_DATA = [
//         {
//             id: '00',
//             label: 'Studio',
//             title: 'Studio Apartment',
//             price: '250'
//         },
//         {
//             id: '01',
//             label: 'Unit1B1B',
//             title: 'Unit (1 Bed 1 Bath)',
//             price: '250'
//         },
//         {
//             id: '02',
//             label: 'Unit2B1B',
//             title: 'Unit (2 Bed 1 Bath)',
//             price: '350'
//         },
//     ]

//     const CART_DATA = [
//         {
//             id: '00',
//             label: 'End of Lease Cleaning',
//             price: '200',
//             quantity: '1'
//         },
//         {
//             id: '01',
//             label: 'Windows Cleaning',
//             price: '40',
//             quantity: '1'
//         },
//         {
//             id: '02',
//             label: 'Wall Moulds',
//             price: '80',
//             quantity: '5'
//         },
//         {
//             id: '03',
//             label: 'Balcony',
//             price: '25',
//             quantity: '1'
//         },
//         {
//             id: '04',
//             label: 'Garage',
//             price: '30',
//             quantity: '1'
//         },
//         {
//             id: '05',
//             label: 'Extra toilets',
//             price: '50',
//             quantity: '1'
//         },
//         {
//             id: '06',
//             label: 'Carpet Steam Clean',
//             price: '99',
//             quantity: '1'
//         },
//         {
//             id: '06',
//             label: 'Carpet Steam Clean',
//             price: '99',
//             quantity: '1'
//         },
//         {
//             id: '06',
//             label: 'Carpet Steam Clean',
//             price: '99',
//             quantity: '1'
//         },
//         {
//             id: '06',
//             label: 'Carpet Steam Clean',
//             price: '99',
//             quantity: '1'
//         },
//     ]

//     const HOLDERS = [
//         {
//             id: '01',
//             label: 'ameneties',
//             component: <Amenities />,
//             visible: true,
//         },
//         {
//             id: '01',
//             label: 'contact',
//             component: <ContactInformation />,
//             visible: true,
//         },
//     ];



//     const showHolders = () => {
//         return (
//             <>
//                 <View style={{ width: width * .9 }}>
//                     <ScrollView showsVerticalScrollIndicator={false} style={{}}>

//                         <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15, marginBottom: 5 }}>
//                             <Text style={{ fontSize: 20, fontWeight: '600', color: 'gray' }}>Contact</Text>
//                         </View>
//                         <ContactInformation />

//                         <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15, marginBottom: 5 }}>
//                             <Text style={{ fontSize: 20, fontWeight: '600', color: 'gray' }}>Addons</Text>
//                         </View>

//                         <Amenities />
//                     </ScrollView>
//                 </View>
//             </>
//         )
//     }

//     // addAddons, removeAddons
//     const Amenities = () => {

//         function addItem(label) {
//             {
//                 label === 'Balcony' ? setBalconyCount(balconyCount + 1) :
//                     label === 'Separate Toilet' ? setSeparateToilet(seperateToilet + 1) :
//                         label === 'Balcony windows (per room)' ? setBalconyWindowsCount(balconyWindowsCount + 1) :
//                             label === 'Sliding doors (per room)' ? setSlidingDoorsCount(slidingDoorsCount + 1) :
//                                 label === 'Blinds Cleaning (per set)' ? setBlindsCount(blindsCount + 1) :
//                                     label === 'Garage' ? setGarageCount(garageCount + 1) :
//                                         label === 'Fridge - inside and outside' ? setFridgeCount(fridgeCount + 1) :
//                                             label === 'Carpets' ? setCarpetsCount(carpetsCount + 1) : null
//             }
//         }

//         function removeItem(label) {
//             {
//                 label === 'Balcony' ? setBalconyCount(balconyCount - 1) :
//                     label === 'Separate Toilet' ? setSeparateToilet(seperateToilet - 1) :
//                         label === 'Balcony windows (per room)' ? setBalconyWindowsCount(balconyWindowsCount - 1) :
//                             label === 'Sliding doors (per room)' ? setSlidingDoorsCount(slidingDoorsCount - 1) :
//                                 label === 'Blinds Cleaning (per set)' ? setBlindsCount(blindsCount - 1) :
//                                     label === 'Garage' ? setGarageCount(garageCount - 1) :
//                                         label === 'Fridge - inside and outside' ? setFridgeCount(fridgeCount - 1) :
//                                             label === 'Carpets' ? setCarpetsCount(carpetsCount - 1) : null
//             }
//         }

//         return (
//             DATA.map((item) => {
//                 return <TickBox
//                     onPress={() => selectAddons(item.id)}
//                     key={item.key}
//                     addAddons={() => addItem(item.label)}
//                     removeAddons={() => removeItem(item.label)}
//                     item={item}
//                     selectSteamCarpet={() => setSteamCarpetSelected(!steamCarpetSelected)}
//                 />
//             })

//         )
//     }

//     const ContactInformation = () => {
//         return (
//             <View style={{}}>
//                 <TextInput placeholder="Contact Name" style={styles.input} placeholderTextColor="white" />
//                 <TextInput placeholder="Contact Number" style={styles.input} keyboardType='numeric' placeholderTextColor="white" />
//                 <TextInput placeholder="Address" style={styles.input} placeholderTextColor="white" />

//                 <TouchableWithoutFeedback onPress={() => { setShowDatePicker(!showDatePicker) }}>
//                     <View style={{ width: '100%', backgroundColor: '#87CEFA', alignItems: 'center', marginTop: 10, borderRadius: 5, padding: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
//                         <Text style={{ fontSize: 18, fontWeight: '600', color: 'white' }}>Schedule on?</Text>
//                         <Icon name={showDatePicker ? "chevron-up-outline" : "chevron-down-outline"} size={25} color='white' />
//                     </View>
//                 </TouchableWithoutFeedback>
//                 {showDatePicker ? <DatePicker date={date} onDateChange={setDate} /> : null}
//             </View>
//         )
//     }

 


//     const Footer = () => {
//         return (

//             <View style={{
//                 backgroundColor: '#fff', width: '90%', paddingHorizontal: 8, paddingVertical: 10, borderRadius: 10, marginBottom: 10, shadowColor: "#000", alignSelf: 'center',
//                 shadowOffset: {
//                     width: 0,
//                     height: 2
//                 },
//                 shadowOpacity: 0.25,
//                 shadowRadius: 4,
//                 position: 'relative', bottom: 10,
//             }}>
//                 <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', }}>
//                     <View style={{ alignItems: 'center', flexDirection: 'row', }}>
//                         <Text style={{ marginLeft: 5, fontSize: 12, fontWeight: '500', color: '#454545' }}>$</Text>
//                         <Text style={{ marginLeft: 5, fontSize: 18, fontWeight: '800', color: '#454545' }}>650.00</Text>
//                     </View>
//                     <View style={{ padding: 5, backgroundColor: '#0047ab', borderRadius: 5, }}>
//                         <Text style={{ color: '#fff', fontSize: 15, fontWeight: '700', }}>Check Out</Text>
//                     </View>
//                 </View>
//             </View>

//         )
//     }

//     const Cart = () => {
//         return (
//             <>
//                 <View style={{ width: '90%', alignSelf: 'center', position: 'absolute', bottom: 20, alignSelf: 'center', }}>
//                     <View style={{
//                         backgroundColor: '#0047ab',
//                         height: 45,
//                         borderRadius: 10,
//                         alignItems: 'center',
//                         justifyContent: 'space-between',
//                         flexDirection: 'row',
//                         paddingHorizontal: 10,
//                     }}>
//                         <Icon name='md-cart' size={30} color='#454545' />
//                         <View style={{ flexDirection: 'row' }}>
//                             <Text style={{ fontSize: 20, fontWeight: '700', color: 'white', position: 'absolute', right: 90 }}>$</Text>
//                             <Text style={{ fontSize: 20, fontWeight: '700', color: 'white' }}>20.00</Text>
//                         </View>
//                     </View>
//                 </View>
//             </>
//         )
//     };

//     const QuickBookingsItems = ({ item }) => {
//         return (
//             <View style={styles.studio}>
//                 <Text style={{ fontSize: 15, fontWeight: '600', color: 'white' }}>{item.title}</Text>
//                 <View style={{ flexDirection: 'row' }}>
//                     <Pressable
//                         style={styles.bookNowButton}
//                         onPress={() => setModalVisible(true)}
//                     >

//                         <Icon name="ios-add-circle-outline" size={25} color="white" />
//                     </Pressable>
//                 </View>
//             </View>
//         )
//     }

//     const CartItems = ({ item }) => {
//         return (
//             <View style={{ width: '100%', backgroundColor: 'white', flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 5, marginTop: 5, marginBottom: 5, alignSelf: 'center', }}>
//                 <View style={{ width: '90%' }}>
//                     <Text style={{ fontSize: 15, color: '#454545', fontWeight: '600' }}>{item.label}</Text>
//                     <View style={{ flexDirection: 'row', }}>
//                         <Text style={{ fontSize: 13, fontWeight: '600', color: '#767676', marginTop: 5 }}>$</Text>
//                         <Text style={{ fontSize: 13, fontWeight: '800', color: '#767676', marginTop: 5 }}> {item.price}</Text>
//                     </View>
//                 </View>
//                 <View style={{ alignItems: 'center', justifyContent: 'center', width: '10%', borderRadius: 50 }}>
//                     <Text style={{ color: '#767676' }}>{item.quantity} x</Text>
//                 </View>
//             </View>
//         )
//     }

//     const CartModal = () => {
//         return (
//             <View style={{}}>

//                 <Modal
//                     animationType='slideInLeft'
//                     animationIn="slideInLeft"
//                     animationOut="slideOutRight"
//                     transparent={true}
//                     visible={cartOn}
//                     onRequestClose={() => {
//                         setCartOn(!cartOn);
//                     }}
//                 >
//                     <SafeAreaView />
//                     <View style={[styles.centeredView, { width: '100%', }]}>
//                         <View style={[styles.modalView, { backgroundColor: 'white', width: '100%', }]}>
//                             <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
//                                 <Text style={{ fontSize: 18, fontWeight: '800', color: '#454545', marginTop: 5 }}>MyCart</Text>
//                                 <Pressable onPress={() => setCartOn(!cartOn)} style={{}} >
//                                     <Icon name="md-close-circle" size={30} color="#767676" style={{ alignSelf: "flex-end" }} />
//                                 </Pressable>
//                             </View>
                            
//                             <View style={{}}>
//                                 <FlatList
//                                     data={CART_DATA}
//                                     showsVerticalScrollIndicator={false}
//                                     contentContainerStyle={{}}
//                                     numColumns={1}
//                                     keyExtrator={(item) => item.data}
//                                     renderItem={({ item }) => {
//                                         return (
//                                             <CartItems item={item} />
//                                         )
//                                     }}
//                                 />
//                             </View>
//                         </View>
//                     </View>
//                     <Footer />
//                 </Modal>
//             </View>
//         )
//     };



//     const selectAddons = (id) => {
//         id === '00' ? setLaundrySelected(!laundrySelected) :
//             id === '01' ? setBalconySelected(!balconySelected) :
//                 id === '02' ? setSeparateToiletSelected(!separateToiletSelected) :
//                     id === '03' ? setWindowsSelected(!windowsSelected) :
//                         id === '04' ? setBlindSelected(!blindSelected) :
//                             id === '05' ? setGarageSelected(!garageSelected) :
//                                 id === '06' ? setFridgeSelected(!fridgeSelected) :
//                                     id === '07' ? setCarpetsSelected(!carpetsSelected) : null
//     }
//     return (
//         <>
//             <SafeAreaView />
//             <View style={styles.container}>
//                 <Text style={{ fontSize: 15, fontWeight: '700', alignSelf: 'flex-start', marginBottom: 5, color: '#141414' }}>Quick Bookings (End of Lease Cleaning)</Text>
//                 <Text style={{ fontSize: 12, fontWeight: '600', alignSelf: 'flex-start', marginBottom: 15, color: '#141414' }}>Quick Booking in 3 simple steps</Text>

//                 <Modal
//                     animationType="slide"
//                     transparent={true}
//                     visible={modalVisible}
//                     onRequestClose={() => {
//                         setModalVisible(!modalVisible);
//                     }}
//                 >
//                     <View style={styles.centeredView}>
//                         <SafeAreaView />

//                         {/* //modalContainer */}
//                         <View style={styles.modalView}>
//                             <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', }}>
//                                 <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#0047ab' }}>Studio Apartment</Text>
//                                 <Pressable style={styles.closeModal} onPress={() => setModalVisible(!modalVisible)}>
//                                     <Icon name="md-close-circle" size={30} color="#0047ab" />
//                                 </Pressable>
//                             </View>

//                             <View style={styles.modalWrapper}>
//                                 {showHolders()}
//                             </View>


//                         </View>
//                     </View>
//                     <CartModal />
//                 </Modal>

//                 {QUICKBOOKINGS_DATA.map((item) => {
//                     return (
//                         <QuickBookingsItems item={item} />
//                     )
//                 })}

//             </View>
//         </>
//     );
// }

// export default QuickBookings


// const styles = StyleSheet.create({

//     container: {
//         width: width * .9,
//         backgroundColor: 'gold',
//         padding: 20,
//         marginVertical: 5,
//         borderRadius: 10,
//         alignSelf: 'center',
//         shadowColor: 'gray',
//         shadowOpacity: 0.5,
//         shadowRadius: 10,
//         shadowOffset: { width: 0, height: 5 }
//     },
//     studio: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         marginBottom: 5,

//     },
//     modalWrapper: { marginBottom: 50 },
//     unit: {
//         marginBottom: 5, marginTop: 10
//     },
//     input: {
//         marginTop: 10,
//         backgroundColor: '#87CEFA',
//         width: '100%',
//         alignSelf: 'center',
//         borderRadius: 5,
//         padding: 10,
//         flexDirection: 'row',
//         fontSize: 18,
//         fontWeight: '600',
//     },
//     centeredView: {
//         flex: 1,
//         alignSelf: 'center',
//         borderRadius: 10
//     },
//     modalView: {

//         backgroundColor: "white",
//         width: width,
//         borderRadius: 10,
//         padding: 10,
//         alignItems: "center",
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 2
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 4,
//     },
//     button: {
//         borderRadius: 5,
//         elevation: 2
//     },
//     closeModal: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center'
//     },
//     bookNowButton: {
//         // alignItems: 'center',
//         // backgroundColor: "#0047ab",
//         // padding: 2,
//         // borderRadius: 5

//     },
//     buttonClose: {
//         backgroundColor: "#2196F3",
//     },
//     textStyle: {
//         alignItems: "center",
//         fontSize: 15,
//         color: "white",
//         fontWeight: "800",
//         marginHorizontal: 5
//     },
//     modalText: {
//         textAlign: "center",
//     },

//     quickBookingsForm: {
//         width: width * .9,

//     }

// });