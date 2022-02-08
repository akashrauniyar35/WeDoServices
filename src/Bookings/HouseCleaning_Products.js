import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

const HouseCleaning_Products = () => {
    return (
        <>
            <SafeAreaView />
            <View style={styles.container}>
                <Text>This is end of HouseCleaning_Products products</Text>
            </View>
        </>
    )
}

export default HouseCleaning_Products

const styles = StyleSheet.create({
    container: {
        // marginVertical: 20,
        marginHorizontal: 20,
        justifyContent: 'space-between',
        borderRadius: 5,
        // marginBottom: 30,

    },

})
