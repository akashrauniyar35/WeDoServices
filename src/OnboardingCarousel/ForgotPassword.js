import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, SafeAreaView, Dimensions, Image, } from 'react-native'
import BackIcon from '../CommonComponents/BackButton'
import AuthInputBox from '../CommonComponents/AuthInputBox';
import logo from '../Assets/logo.png'

const facebookLogo = 'https://i.imgur.com/q9K6l8t.png';
const googleLogo = 'https://i.imgur.com/MXgIJW5.png';


const { width, height } = Dimensions.get('screen');

const ForgotPassword = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);


    return (
        <View style={styles.container}>

            <SafeAreaView />
            <StatusBar hidden />

            <View style={styles.topScreen}>

                <View style={{ justifyContent: 'flex-end', width }}>
                    <BackIcon nav={navigation} />
                </View>

                <Image source={logo} style={{ width: width / 1.5, height: height * .5, resizeMode: 'contain', alignSelf: 'center' }} />
            </View>

            <View style={styles.bottomScreen}>

                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', marginBottom: 20 }}>Forgot Password</Text>

                <Text style={{ width: width * .8, fontSize: 15, fontWeight: '600', color: 'white', marginBottom: 20 }}>Please enter your emial address to send a reset link.</Text>

                <AuthInputBox label="Email" />





                <TouchableOpacity style={styles.register}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: '#fff' }}>Send</Text>
                </TouchableOpacity>


            </View>

        </View>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#0047ab',
    },
    topScreen: {
        flex: .6,
    },
    bottomScreen: {
        flex: .4,
        backgroundColor: '#add8e6',
        width: width,
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 40,
    },
    register: {
        marginTop: 40,
        justifyContent: 'center',
        borderRadius: 5,
        alignItems: 'center',
        width: width * .8,
        height: width * .1,
        backgroundColor: '#0047ab'
    },
})