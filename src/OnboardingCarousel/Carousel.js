import React, { useState, useRef, useEffect } from 'react';
import { StatusBar, Animated, Text, View, StyleSheet, Dimensions, FlatList, TouchableOpacity, Image } from 'react-native';
const { width, height } = Dimensions.get('screen');


const bgs = ['#FF455C', 'mediumseagreen', 'indigo', 'darkslategray'];
const DATA = [
    {
        "key": "3571747",
        "title": "Book hotels anytime from anywhere",
        "description": "Find a wide variety of stays including Hotels, himalayan homestays and many more.",
        "image": "https://i.imgur.com/E5FgBjw.png"
    },
    {
        "key": "3571572",
        "title": "We bring adventures near you",
        "description": "Himalayan Trekkings, Wildlife Watching, Rafting, Paragliding, Ziplines, Mount Climbing and many more.",
        "image": "https://i.imgur.com/BRVstv6.png"
    },
    {
        "key": "3571680",
        "title": "Venues and foods",
        "description": "Thinking of a get together with your friends? You have come to the right place. Book from hundreds of venues all around Nepal.",
        "image": "https://i.imgur.com/QWMH9Hf.png"
    },
    {
        "key": "3571603",
        "title": "Secure payment methods",
        "description": "We accept multiple methods which are secure and are trusted around the world.",
        "image": "https://i.imgur.com/irrjKMf.png"

    }
]

const renderItems = (item) => {

    return (
        <View style={{ width, alignItems: 'center', padding: 15, }}>
            <View style={{ flex: 0.7 }}>
                <Image source={{ uri: item.image }} style={{ width: width / 2, height: height / 2, resizeMode: 'contain' }} />
            </View>
            <View style={{ flex: 0.2 }}>
                <Text style={{ color: '#fff', fontWeight: '800', fontSize: 22, marginBottom: 10 }}>{item.title}</Text>
                <Text style={{ color: '#fff', fontWeight: '300' }}>{item.description}</Text>
            </View>
        </View>
    )
}

const Indicator = ({ scrollX }) => {
    return (
        <View style={{ position: 'absolute', flexDirection: 'row', bottom: 50, }}>
            {DATA.map((item, key) => {

                const inputRange = [(key - 1) * width, key * width, (key + 1) * width]
                const scale = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.8, 1.4, 0.8],
                    extrapolate: 'clamp'
                })

                return (
                    <Animated.View
                        key={`indicator-${key}`}
                        style={{ height: 10, width: 10, borderRadius: 10, backgroundColor: '#fff', margin: 10, transform: [{ scale }] }}
                    />
                )
            })}
        </View>
    )
}

const Backdrop = ({ scrollX }) => {
    const backgroundColor = scrollX.interpolate({
        inputRange: bgs.map((x, i) => i * width),
        outputRange: bgs.map((bg) => bg),
    });
    return (
        <Animated.View
            style={[
                StyleSheet.absoluteFillObject,
                {
                    backgroundColor,
                },
            ]}
        />
    )
}

const Square = ({ scrollX }) => {

    const YOLO = Animated.modulo(Animated.divide(
        Animated.modulo(scrollX, width),
        new Animated.Value(width)
    ), 1)

    const rotate = YOLO.interpolate({
        inputRange: [0, .5, 1],
        outputRange: ['35deg', '0deg', '35deg']
    })

    const translateX = YOLO.interpolate({
        inputRange: [0, .5, 1],
        outputRange: [0, -height, 0]
    })

    return (
        <Animated.View
            style={{
                width: height,
                height: height,
                backgroundColor: '#fff',
                borderRadius: 85,
                position: 'absolute',
                top: -height * 0.6,
                left: -height * 0.3,
                transform: [
                    {
                        rotate
                    },
                    {
                        translateX
                    }
                ]
            }}

        />
    )
}



const Carousel = ({ navigation }) => {
    const [visible, setVisible] = useState(false)
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const springX = useRef(new Animated.Value(width * .9)).current

    const SlideButtons = () => {
        useEffect(() => {
            Animated.timing(springX, {
                toValue: - width * .5,
                duration: 1000,
                useNativeDriver: false
            }).start();
        }, [springX])

        return (
            <Animated.View                 // Special animatable View
                style={{
                    left: springX,
                }}
            >
                <View style={{ flexDirection: 'row', bottom: 120, width, justifyContent: 'space-evenly', position: 'absolute' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
                        <Text style={styles.text}>Log in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={styles.button}>
                        <Text style={styles.text}>Create an account</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        );
    }


    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <Backdrop scrollX={scrollX} />
            <Square scrollX={scrollX} />
            <Animated.FlatList
                data={DATA}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                scrollEventThrottle={32}
                contentContainerStyle={{ paddingBottom: 100 }}
                keyExtractor={item => item.key}

                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                )}

                renderItem={({ item }) => {
                    return (
                        renderItems(item)
                    )
                }}

                onEndReached={() => {
                    setVisible(true)
                }}
            />

            {
                visible ? <SlideButtons navigation={navigation} /> : null
            }
            <Indicator scrollX={scrollX} />
        </View>
    );
}

export default Carousel;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    text: { fontSize: 15, paddingHorizontal: 20, paddingVertical: 10, fontWeight: '600', }
});