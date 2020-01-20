import React from 'react';
import { StatusBar, YellowBox } from 'react-native';
import Routes from './src/navigation';

YellowBox.ignoreWarnings([
    'Warning: componentWillReceiveProps',
    'Warning: componentWillMount'
]);

export default function App() {
    return (
        <React.Fragment>
            <StatusBar hidden />
            <Routes />
        </React.Fragment>
    );
}
