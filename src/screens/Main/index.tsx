import React, { useEffect, useState } from 'react';
import { NavigationContainerProps } from 'react-navigation';
import {
    PROVIDER_GOOGLE,
} from 'react-native-maps';

import MapView from 'react-native-maps';

import {
    requestPermissionsAsync,
    getCurrentPositionAsync
} from 'expo-location';
import SearchBox from './../../components/SearchBox';
import MarkerDev from './../../components/MarkerDev';
import {
    Container,
    Map,
    Icon,
    Button,
    Select,
    MapContainer,
    SideBar
} from './styles';
import Api from './../../services/api';
import mapstyle from './map.json';
import { optionsTechs } from './../../shared/techs';
import { User } from './../../shared/types';

const Main: React.FC<NavigationContainerProps> = ({ navigation }) => {

    let refMap: MapView;

    const [devs, setDevs] = useState<User[]>([]);
    const [techs, setTechs] = useState<string>('');
    const [correntRegion, setCorrentRegion] = useState(null)
    const [geometryL, setGeometryL] = useState(null)
    const [selectedTechs, setSelectedTechs] = useState()
    const [openSelect, setOpenSelect] = useState(false)

    const onSelectionsChange = (selected: any) => {
        setSelectedTechs(selected)
        const techsString = selected.map((tech: any) => tech.value).join(",");
        setTechs(techsString);
        loadDevs(geometryL.latitude, geometryL.longitude, techsString);
    }

    async function loadInitialPosition() {
        const { granted } = await requestPermissionsAsync();
        if (granted) {
            const { coords } = await getCurrentPositionAsync({
                enableHighAccuracy: true
            });

            const { latitude, longitude } = coords;

            setCorrentRegion({
                latitude,
                longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            });
            setGeometryL({ latitude, longitude });
            loadDevs(latitude, longitude, '');
        }

    }

    const handleLocationSelected = (data: any, { geometry }) => {
        const location = {
            latitude: geometry.location.lat,
            longitude: geometry.location.lng
        }
        refMap.animateCamera({
            center: location,
            heading: 0,
            zoom: 15
        }, { duration: 2000 });
        loadDevs(location.latitude, location.longitude, techs);

        setGeometryL(location);
    }

    const loadDevs = async (lat: number, lng: number, techsp = techs) => {
        try {
            const response = await Api.get('/search', {
                params: {
                    latitude: lat,
                    longitude: lng,
                    techs: techsp,
                    distance: 10000
                }
            });
            console.log(response.data, techsp)
            setDevs(response.data)
        } catch (error) {
            alert('Erro')
        }
    }

    useEffect(() => {
        loadInitialPosition()
    }, []);

    if (!correntRegion) {
        return null;
    }

    return (
        <Container>
            <MapContainer>
                <Map
                    provider={PROVIDER_GOOGLE}
                    initialRegion={correntRegion}
                    customMapStyle={mapstyle}
                    showsUserLocation
                    showsMyLocationButton={false}
                    showsCompass={false}
                    ref={ref => refMap = ref}
                >
                    {devs.map(dev => {
                        return (
                            <MarkerDev
                                open={navigation}
                                key={dev._id}
                                data={dev}
                            />
                        );
                    })}

                </Map>
                <SearchBox onLocationSelected={handleLocationSelected} />
                <SideBar>
                    <Button onPress={() => refMap.animateCamera({
                        center: correntRegion,
                        heading: 0,
                        zoom: 17
                    }, { duration: 2000 })}>
                        <Icon name="my-location" />
                    </Button>
                    <Button onPress={() => setOpenSelect(openSelect ? false : true)}>
                        <Icon name="list" />
                    </Button>
                </SideBar>
            </MapContainer>
            <Select
                open={openSelect}
                items={optionsTechs}
                selectedItems={selectedTechs}
                onSelectionsChange={onSelectionsChange}
            />
        </Container>
    );
}

export default Main;
