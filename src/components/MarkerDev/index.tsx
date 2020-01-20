import React from 'react';

import { AvatarDev, Container, Border, Box, Name, Body, Bio, Techs } from './styles';
import { AvatarDevProps } from './types';

const MarkerDev: React.FC<AvatarDevProps> = ({ data, open }) => {
    return (
        <Container
            coordinate={{
                latitude: data.location.coordinates[1],
                longitude: data.location.coordinates[0]
            }}
        >
            <Border>
                <AvatarDev source={{ uri: data.avatar_url }} />
            </Border>
            <Box onPress={() => open.navigate('GitHub', {
                github: data.github_username
            })}>
                <Body>
                    <Name>{data.name}</Name>
                    <Bio>{data.bio}</Bio>
                    <Techs>{data.techs.join(', ')}</Techs>
                </Body>
            </Box>
        </Container>
    );
}

export default MarkerDev;
