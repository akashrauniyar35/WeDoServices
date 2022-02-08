import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image, FlatList, Animated, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { BackButton, NextButton } from '../CommonComponents';
import studio from '../Assets/product_Studio.png'
import unit from '../Assets/product_Unit.png'
import house from '../Assets/product_House.png'



const { width, height } = Dimensions.get('screen');

const EOL_Products = ({ navigation }) => {
    const [propertyType, setPropertyType] = useState(null);

    const [studioSelected, setStudioSelected] = useState(false);
    const [unitSelected, setUnitSelected] = useState(false);
    const [houseSelected, setHouseSelected] = useState(false);

    const [bedRoomCount, setBedRoomCount] = useState(null);
    const [bathroomCount, setBathroomCount] = useState(null);

    const springY = useRef(new Animated.Value(0)).current;

    const AnimatedAddSubtract = () => {
        useEffect(() => {
            Animated.spring(springY, {
                toValue: 10,
                duration: 1000,
                useNativeDriver: false
            }).start();
        }, [springY])

        return (
            <Animated.View style={{ marginTop: springY }}>
                <AddSubtractFunction />
            </Animated.View>
        )
    }


    const DATA = [
        {
            id: 0,
            product: 'Studio',
            image: studio,
            isSelected: studioSelected,
        },
        {
            id: 1,
            product: 'Unit',
            image: unit,
            isSelected: unitSelected,
        },
        {
            id: 2,
            product: 'House',
            image: house,
            isSelected: houseSelected,
        },
    ]


    const AddSubtractFunction = () => {
        return (
            <>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, }}>
                    <Text style={{ fontSize: 15, color: 'gray' }}>Bedroom(s)</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                        <TouchableOpacity>
                            <Icon name="add-circle-outline" size={18} color={'gray'} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, color: 'gray', marginHorizontal: 10, }}>1</Text>
                        <TouchableOpacity>
                            <Icon name="remove-circle-outline" size={18} color={'gray'} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, borderBottomWidth: .5, }}>
                    <Text style={{ fontSize: 15, color: 'gray' }}>Bathroom(s)</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                        <TouchableOpacity>
                            <Icon name="add-circle-outline" size={18} color={'gray'} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, color: 'gray', marginHorizontal: 10, }}>1</Text>
                        <TouchableOpacity>
                            <Icon name="remove-circle-outline" size={18} color={'gray'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </>
        )
    }

    const ProductCard = ({ title, img, id, isSelected }) => {


        function select(title, id, isSelected) {
            id == 0 ? setStudioSelected(!studioSelected) & setHouseSelected(false) & setUnitSelected(false) :
                id == 1 ? setUnitSelected(!unitSelected) & setStudioSelected(false) & setHouseSelected(false) :
                    id == 2 ? setHouseSelected(!houseSelected) & setStudioSelected(false) & setUnitSelected(false) : null
            setPropertyType(title);

        }


        return (
            <TouchableWithoutFeedback onPress={() => select(title, id, isSelected)}>
                <View style={styles.card}>
                    <Text style={{ fontSize: 20, fontWeight: '700', color: 'gray', marginBottom: 5, }}>{title}</Text>
                    <Image source={img} resizeMode='cover'  style={styles.img} />
                    {studioSelected & title == 'Studio' ? <AnimatedAddSubtract /> :
                        unitSelected & title == 'Unit' ? <AnimatedAddSubtract /> :
                            houseSelected & title == 'House' ? <AnimatedAddSubtract /> :
                                null}
                </View >
            </TouchableWithoutFeedback>
        )
    }



    return (
        <>
            <SafeAreaView />
            <BackButton nav={navigation} />
            <View style={styles.container}>
                <Text style={{ fontSize: 20, fontWeight: '700', color: 'black' }}>Please tell us about your place</Text>
                <FlatList
                    pagingEnabled
                    data={DATA}
                    showsVerticalScrollIndicator={false}
                    keyExtrator={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <ProductCard title={item.product} img={item.image} id={item.id} isSelected={item.isSelected} />
                        )
                    }}
                />
                <NextButton navigation={navigation} routeTo='CleaningAreas' />
            </View>
        </>
    )
}

export default EOL_Products

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 20,
        flex: 1,
    },
    card: {
        padding: 10,
        width: '80%',
        alignSelf: 'center',
        // marginVertical: 10,
    },
    img: {
        width: '100%',
        height: 120,
        borderRadius: 10,
    },

})
