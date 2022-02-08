import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, TextInput, SafeAreaView, Dimensions, Image, } from 'react-native'
import BackIcon from '../CommonComponents/BackButton'
import AuthInputBox from '../CommonComponents/AuthInputBox';
import Icon from 'react-native-vector-icons/Ionicons';
import logo from '../Assets/logo.png'
import facebook from '../Assets/facebook.png'
import google from '../Assets/google.png'

const facebookLogo = 'https://i.imgur.com/q9K6l8t.png';
const googleLogo = 'https://i.imgur.com/MXgIJW5.png';


const { width, height } = Dimensions.get('screen');

const Signup = ({ navigation }) => {
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

                <Image source={logo} style={{ width: width / 1.5, height: 250, resizeMode: 'contain', alignSelf: 'center' }} />
            </View>

            <View style={styles.bottomScreen}>

                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', marginBottom: 20 }}>Create Account</Text>

                {/* <AuthInputBox label="Full Number" />
                <AuthInputBox label="Phone Number" />
                <AuthInputBox label="Email" /> */}

                {/* Password & Forgot Password */}
                {/* <View style={{}}>
                    <Text style={styles.label}>Password</Text>

                    <View style={styles.passwordInput}>
                        <TextInput style={styles.input} />
                        <Icon name={showPassword ? 'ios-eye-off' : 'ios-eye'} color='#0047ab' size={20} style={{ marginRight: 10, }} onPress={() => setShowPassword(!showPassword)} />
                    </View>

                </View> */}

                <View style={styles.socialLogin}>
                    <Image source={facebook} style={{ height: '90%', width: '10%', resizeMode: 'contain', }} />
                    <Text style={{ fontSize: 15, fontWeight: '600', color: '#fff' }}>Sign up with Facebook</Text>
                </View>

                <View style={[styles.socialLogin, { backgroundColor: '#3cba54' }]}>
                    <Image source={google} style={{ height: '90%', width: '10%', resizeMode: 'contain', }} />
                    <Text style={{ fontSize: 15, fontWeight: '600', color: '#fff' }}>Sign up with Google</Text>
                </View>

                <View style={{}}>
                    <Text>or</Text>
                </View>

                <TouchableOpacity style={styles.register} onPress={() => navigation.navigate('SignupWithUs')}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: '#fff' }}>Signup with us</Text>
                </TouchableOpacity>


                <View style={styles.signup}>
                    <Text>I'm already a member.</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={{ color: '#0047ab', fontWeight: '600', fontsize: 18, marginLeft: 5 }}>Sign In?</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#0047ab',
    },
    topScreen: {
        flex: .5,
    },
    bottomScreen: {
        flex: .5,
        backgroundColor: '#add8e6',
        width: width,
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 40,
    },
    socialLogin: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 5,
        width: width * .8,
        height: width * .1,
        backgroundColor: '#1976d2',
        borderRadius: 5,
        marginBottom: 20,
    },
    register: {
        marginTop: 20,
        justifyContent: 'center',
        borderRadius: 5,
        alignItems: 'center',
        width: width * .8,
        height: width * .1,
        backgroundColor: '#0047ab'
    },
    signup: {
        marginTop: 40,
        flexDirection: 'row'
    },
    passwordInput: {
        marginBottom: 5,
        flexDirection: 'row',
        backgroundColor: 'white',
        width: .8 * width,
        borderRadius: 5,
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    label: {
        marginLeft: 8,
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
        marginBottom: 5
    },
    input: {
        padding: 10,
        color: 'gray',
        width: '90%',
        fontSize: 18,
        fontWeight: '600',
    },
})