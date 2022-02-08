import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
const { width, height } = Dimensions.get('screen')
const color = '#FF455C'

const BackIcon = ({ nav }) => {
    return (
        <TouchableOpacity onPress={() => nav.goBack()} style={styles.backIcon}>
            <View style={styles.topShadow}>
                <View style={styles.bottomShadow}>
                    <View style={{ width: 35, height: 35, borderRadius: 50, backgroundColor: 'gray', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name='ios-arrow-back' color='white' size={25} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default BackIcon

const styles = StyleSheet.create({
    backIcon: {
        alignSelf: 'flex-start',
        marginLeft: 10,
        alignItems: 'center',

    },
    topShadow: {
        shadowOffset: {
            width: -5,
            height: -5
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        shadowColor: "#ececec"
    },
    bottomShadow: {
        alignItems: 'center',
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: .6,
        shadowRadius: 5,
        shadowColor: "#4f4f4f"
    },
})