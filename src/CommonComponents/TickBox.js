import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, Switch, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const TickBox = ({ key, item, onPress, addAddons, removeAddons, selectSteamCarpet }) => {
    const [carpetCleaning, setCarpetCleaning] = useState(false);
    const toggleSwitch = () => {
        setCarpetCleaning(!carpetCleaning);
    }

    return (
        <>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={onPress}>
                        {item.selected ? <Icon name='ios-checkmark-circle' size={30} color='#0047ab' /> : <Icon name='ios-add-circle-outline' size={30} color='#0047ab' />}
                    </TouchableOpacity>
                    <Text style={[styles.label]}>{item.label}</Text>
                </View>



                {
                    item.selected ?
                        item.addFunction ?
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TouchableOpacity onPress={addAddons} style={styles.addIcon} >
                                    <Icon name='ios-add' size={20} color='#0047ab' />
                                </TouchableOpacity>
                                <Text style={{ marginHorizontal: 10, fontSize: 18, fontWeight: '800' }}>{item.quantity}</Text>
                                <TouchableOpacity onPress={removeAddons} style={styles.addIcon} >
                                    <Icon name='ios-remove' size={20} color='#0047ab' />
                                </TouchableOpacity>
                            </View> : null : null
                }

                {item.label === 'Carpets' ?
                    <View>
                        <Text>{item.steamCarpetSelected ? "Steam Cleaning" : "Vaccume Cleaning"}</Text>
                    </View>
                    : null}
            </View>

            {item.label === 'Carpets' ?

                <View style={{ width: '90%', alignSelf: 'flex-end', padding: 5, }}>

                    <View style={{ marginBottom: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 18, fontWeight: '700', color: 'gray' }}>{item.steamCarpetSelected ? "Steam Cleaning" : "Vaccume Cleaning"}</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={item.steamCarpetSelected ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => selectSteamCarpet()}
                            value={item.steamCarpetSelected}
                        />
                    </View>

                    {item.steamCarpetSelected ?
                        <View>

                            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5, }}>
                                <Text>Lounge</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <TouchableOpacity onPress={addAddons} style={styles.addIcon} >
                                        <Icon name='ios-add' size={15} color='black' />
                                    </TouchableOpacity>
                                    <Text style={{ marginHorizontal: 10, fontSize: 18, fontWeight: '800' }}>{item.quantity}</Text>
                                    <TouchableOpacity onPress={removeAddons} style={styles.addIcon} >
                                        <Icon name='ios-remove' size={15} color='black' />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5, }}>
                                <Text>Bed Room</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <TouchableOpacity onPress={addAddons} style={styles.addIcon} >
                                        <Icon name='ios-add' size={15} color='black' />
                                    </TouchableOpacity>
                                    <Text style={{ marginHorizontal: 10, fontSize: 18, fontWeight: '800' }}>{item.quantity}</Text>
                                    <TouchableOpacity onPress={removeAddons} style={styles.addIcon} >
                                        <Icon name='ios-remove' size={15} color='black' />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5, }}>
                                <Text>Other</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <TouchableOpacity onPress={addAddons} style={styles.addIcon} >
                                        <Icon name='ios-add' size={15} color='black' />
                                    </TouchableOpacity>
                                    <Text style={{ marginHorizontal: 10, fontSize: 18, fontWeight: '800' }}>{item.quantity}</Text>
                                    <TouchableOpacity onPress={removeAddons} style={styles.addIcon} >
                                        <Icon name='ios-remove' size={15} color='black' />
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View> : null}


                </View>


                : null}
        </>
    )
}

export default TickBox

const styles = StyleSheet.create({
    container: { flexDirection: 'row', alignItems: 'center', marginVertical: 5, justifyContent: 'space-between' },
    label: { fontSize: 15, fontWeight: '600', marginLeft: 5, color: 'gray' },
    labelCarpets: { fontSize: 15, fontWeight: '600', marginLeft: 5, color: 'gray', },
    addIcon: { paddingVertical: .5, paddingHorizontal: 1, backgroundColor: '#D3D3D3', borderRadius: 50, },
})
