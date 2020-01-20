import React, { useState } from 'react';
import { Platform, Dimensions } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { maps } from './../../shared/apiKey';

const GooglePlacesInput = ({ onLocationSelected }) => {
    const [searchFocused, setSearchFocused] = useState(false);
    const width = Dimensions.get('window').width;
    return (
        <GooglePlacesAutocomplete
            placeholder='Busque por cidades'
            placeholderTextColor="#333"
            onPress={onLocationSelected}

            query={{
                // available options: https://developers.google.com/places/web-service/autocomplete
                key: maps,
                language: 'pt-BR', // language of the results
                types: '(cities)' // default: 'geocode'
            }}

            textInputProps={{
                onFocus: () => {
                    setSearchFocused(true);
                },
                onBlur: () => {
                    setSearchFocused(false);
                },
                autoCapitalize: 'none',
                autoCorrect: false
            }}

            listViewDisplayed={searchFocused}
            fetchDetails={true}
            enablePoweredByContainer={false}
            styles={{
                container: {
                    position: 'absolute',
                    top: 20,
                    width: width
                },
                textInputContainer: {
                    backgroundColor: 'transparent',
                    height: 40,
                    marginHorizontal: 20,
                    borderTopWidth: 0,
                    borderBottomWidth: 0
                },
                textInput: {
                    height: 45,
                    fontSize: 18,
                    borderWidth: 1,
                    borderColor: "#DDD",
                },
                listView: {
                    borderWidth: 1,
                    borderColor: "#DDD",
                    backgroundColor: "#FFF",
                    marginHorizontal: 29,
                    borderRadius: 5,
                    marginTop: 22
                },
                description: {
                    fontSize: 14
                },
                row: {
                    height: 40,
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 10,
                    paddingRight: 10,
                }
            }}
        />
    );
}
export default GooglePlacesInput;
