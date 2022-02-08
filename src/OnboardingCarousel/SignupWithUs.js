import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, TextInput, SafeAreaView, Dimensions, Image, TouchableWithoutFeedback } from 'react-native'
import BackIcon from '../CommonComponents/BackButton'
import AuthInputBox from '../CommonComponents/AuthInputBox';
import Icon from 'react-native-vector-icons/Ionicons';
import logo from '../Assets/logo.png'

const facebookLogo = 'https://i.imgur.com/q9K6l8t.png';
const googleLogo = 'https://i.imgur.com/MXgIJW5.png';


const { width, height } = Dimensions.get('screen');

const SignupWithUs = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(true);
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

                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#0047ab', marginBottom: 20 }}>Sign Up</Text>
                <AuthInputBox label="Email" />

                {/* Password & Forgot Password */}

                <View style={{}}>
                    <Text style={styles.label}>Password</Text>

                    <View style={styles.passwordInput}>

                        <TextInput style={styles.input} secureTextEntry={showPassword} />

                        <Icon name={showPassword ? 'ios-eye-off' : 'ios-eye'} color='#0047ab' size={20} style={{ marginRight: 10 }} onPress={() => setShowPassword(!showPassword)} />
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                        <Text style={styles.forgotPassword}>Forgot your password ?</Text>
                    </TouchableOpacity>
                </View>




                <TouchableOpacity style={styles.register}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: '#fff' }}>Sign Up</Text>
                </TouchableOpacity>


                <View style={styles.signup}>
                    <Text>I'm an existing user.</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={{ color: '#0047ab', fontWeight: '600', fontsize: 18, marginLeft: 5 }}>Login?</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}

export default SignupWithUs

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#0047ab',
    },
    topScreen: {
        flex: .4,
    },
    bottomScreen: {
        flex: .6,
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
    signup: {
        marginTop: 80,
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
        fontsize: 18,
        fontWeight: '600',
        color: '#0047ab',
        marginBottom: 5
    },
    input: {
        padding: 10,
        color: 'gray',
        width: '90%',
        fontSize: 18,
        fontWeight: '600',
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginTop: 5,
        fontSize: 12,
        fontWeight: '400',
        color: '#0047ab'
    }
})