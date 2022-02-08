import { returnStatement } from '@babel/types';
import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions, TouchableWithoutFeedback, TextInput, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { BackButton, NextButton } from '../CommonComponents';

import img from '../Assets/notificaitonsGradient.png'

const { width, height } = Dimensions.get('screen');
const Account = ({ navigation }) => {
    const [profilePicture, setProfilePicture] = useState(null);
    const [name, setName] = useState(null);
    const [isMale, setIsMale] = useState(false);
    const [isFemale, setIsFemale] = useState(false);
    const [age, setAge] = useState(null);
    const [email, setEmail] = useState(null);



    url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY500qQQqva9B0Aq9oosOEN_cYEhgFbDEAkw&usqp=CAU'

    const PhotoCard = () => {
        return (
            <>
                <View style={styles.picture}>
                    <Image source={url} resizeMode='cover' />
                </View>
                <TouchableWithoutFeedback>
                    <Text style={{ fontSize: 15, fontWeight: '500', color: '#454545', marginVertical: 10, marginBottom: 30, alignSelf: 'center', }}>Upload Image</Text>
                </TouchableWithoutFeedback>
            </>
        )
    }

    const SaveButton = () => {
        return (
            <View style={{ width: '90%', height: '6%', backgroundColor: 'teal', borderRadius: 10, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginVertical: 5, }}>
                <Text style={{ fontSize: 25, fontWeight: '500', color: '#fff' }}>Save</Text>
            </View>
        )
    }

    const Infos = () => {
        return (
            <>
                <View style={styles.infos}>
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', color: '#454545', marginVertical: 20, }}>
                            <Text style={{ fontSize: 15, fontWeight: '500', width: '30%', color: '#454545', }}>Name</Text>
                            <View style={{ borderBottomWidth: .5, borderBottomColor: 'gray', width: '65%', }}>
                                <TextInput value={name} onChange={(value) => setName(value)} style={{ fontSize: 15, fontWeight: '500', color: '#454545', }}></TextInput>
                            </View>
                        </View>
                    </View>
                    <View>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', color: '#454545', marginVertical: 20, }}>
                            <Text style={{ fontSize: 15, fontWeight: '500', width: '30%', color: '#454545', }}>Phone</Text>
                            <View style={{ borderBottomWidth: .5, borderBottomColor: 'gray', width: '65%', }}>
                                <TextInput value={name} onChange={(value) => setName(value)} style={{ fontSize: 15, fontWeight: '500', color: '#454545', }}></TextInput>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', color: '#454545', marginVertical: 20, }}>
                            <Text style={{ fontSize: 15, fontWeight: '500', width: '30%', color: '#454545', }}>Email</Text>
                            <View style={{ borderBottomWidth: .5, borderBottomColor: 'gray', width: '65%', }}>
                                <TextInput keyboardType="email-address" value={name} onChange={(value) => (value)} style={{ fontSize: 15, fontWeight: '500', color: '#454545', }}></TextInput>
                            </View>
                        </View>
                    </View>
                </View>
            </>
        )
    }

    return (
        <>
            <View>
                <SafeAreaView backgroundColor="white" />
                <View style={styles.container}>
                    <View style={styles.header} >
                        <BackButton nav={navigation} />
                        <Text style={{ fontSize: 30, fontWeight: '700', color: '#454545', bottom: 10, marginTop: 10, marginBottom: 20, marginLeft: 10 }}>Account</Text>
                        <PhotoCard />
                    </View>
                    <ImageBackground source={img} style={styles.view} imageStyle={{ borderTopStartRadius: 15, borderTopEndRadius: 15 }}>
                        <Infos />
                        <SaveButton />
                    </ImageBackground>
                </View>
            </View>
        </>
    )
}

export default Account

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',

    },
    header: {
        backgroundColor: 'white',
        height: height * .3,

    },
    view: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        height: height * .7,
    },
    picture: {
        borderRadius: 50,
        backgroundColor: 'gold',
        height: 80,
        width: 80,
        alignSelf: 'center',
        marginVertical: 5,
    },
    infos: {
        marginVertical: 5,
    }
})
