import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen')

const NextButton = ({ navigation, routeTo }) => {
    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate(routeTo)}>
            <View style={styles.container}>
                <Text style={{ fontSize: 18, fontWeight: '600', color: 'white', alignSelf: 'center' }}>Next</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default NextButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#686BFF',
        padding: 10,
        borderRadius: 5,
        marginTop: 50,

    }
})
