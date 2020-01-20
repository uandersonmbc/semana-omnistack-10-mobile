import React from 'react';
import { WebView } from 'react-native-webview';
import { NavigationContainerProps } from 'react-navigation';

const GitHub: React.FC<NavigationContainerProps> = ({ navigation }) => {
    const github = navigation.getParam('GitHub');
    return (
        <WebView style={{ flex: 1 }} source={{ uri: `https://github.com/${github}` }} />
    );
}

export default GitHub;
