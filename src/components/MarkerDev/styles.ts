import styled from 'styled-components/native';
import {
    Marker,
    Callout
} from 'react-native-maps';
import { THEME } from './../../shared/colors';

export const Container = styled(Marker)`
`;

// Box de informação do usuário
export const Box = styled(Callout)`
`;

export const Body = styled.View`
    width: 250px;
`;

export const Name = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;

export const Bio = styled.Text`
    margin-top: 1px;
    font-size: 10px;
    color: #666;
`;

export const Techs = styled.Text`
    font-size: 14px;
    font-weight: bold;
    text-transform: capitalize;
`;
//

export const Border = styled.View`
    width: 40px;
    height: 40px;
    border-radius: 36px;
    border: 2px solid ${THEME.PRIMARY};
`;

export const AvatarDev = styled.Image`
    width: 36px;
    height: 36px;
    border-radius: 36px;
`;
