import React, { useState, useEffect } from 'react';
import { Text, View, Image, TextInput, FlatList } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { placesAPI, placesURL } from '../Config/googlePlacesAPI'
import axios from "axios";
import { ScrollView } from 'react-native-gesture-handler';

const GOOGLE_PLACES_API_KEY = 'AIzaSyASBiW592LOdo_LAD2WoFrSP2ZAlBddeCg';

const GooglePlacesInput = ({ onLocationSelected, toggleProp, locations }) => {
    const [prediction, setPrediction] = useState([]);
    const [toggle, setToggle] = useState([toggleProp]);

    useEffect(() => {
        const onChangeLocation = async () => {
            const { data } = await axios.get(placesURL, {
                prams: {
                    key: placesAPI,
                    input: locations,
                }
            });
            setPrediction(data);
        };
        onChangeLocation();
    }, [locations]);

    console.log('predictionData', prediction)

    return (
        // <FlatList
        //     data={prediction}

        <Text>Maps</Text>
        // <GooglePlacesAutocomplete
        //     query={{
        //         key: GOOGLE_PLACES_API_KEY,
        //         url: placesURL,
        //         language: 'en', // language of the results
        //     }}
        //     onPress={(data, details) => console.log(data, details)}
        //     textInputProps={{
        //         InputComp: TextInput,
        //         leftIcon: { type: 'font-awesome', name: 'chevron-left' },
        //         errorStyle: { color: 'red' },
        //     }}
        // />
    );
};

export default GooglePlacesInput;