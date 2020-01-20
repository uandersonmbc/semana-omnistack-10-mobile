import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';
import SelectMultiple from 'react-native-select-multiple';
import { THEME } from './../../shared/colors';

export const Container = styled.View`
    flex: 1;
`;

export const MapContainer = styled.View`
    flex: 1;
`;
export const Map = styled(MapView)`
    flex: 1;
`;

export const Select = styled(SelectMultiple)`
    flex: ${props => props.open ? 0.5 : 0};
`;

export const SideBar = styled.View`
    position: absolute;
    bottom:  70px;
    right: 10px;
    width: 60px;
    padding: 5px;
`;

export const Button = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    background: ${THEME.WHITE};
    height: 50px;
    width: 50px;
    border-radius: 50px;
    margin-top: 5px;
`;

export const Icon = styled(MaterialIcons)`
    font-size: 25px;
    color: #606060;
`;
