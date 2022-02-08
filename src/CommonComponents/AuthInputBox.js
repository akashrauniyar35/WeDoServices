import React from 'react'
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AuthInputBox = ({ label, onChangeText }) => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.label}>{label}</Text>
                <TextInput style={styles.input} onChangeText={onChangeText} />
            </View>
        </>
    )
}

export default AuthInputBox

const styles = StyleSheet.create({
    container: {
        marginBottom: 15
    },
    label: {
        fontsize: 18,
        fontWeight: '600',
        color: '#0047ab',
        marginBottom: 5

    },
    input: {
        backgroundColor: 'white',
        width: .8 * windowWidth,
        borderRadius: 5,
        padding: 10,
        color: 'gray',
        fontSize: 18, fontWeight: '600',
    }
})
