import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import DatePicker from 'react-native-date-picker'

const TimeDatePicker = () => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
        <View>
            <Button title="Open" onPress={() => setOpen(true)} />
            <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
        </View>
    )
}

export default TimeDatePicker

const styles = StyleSheet.create({
    container: {

    }
})
