import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './../screens/Main';
import GitHub from './../screens/GitHub';

const Routes = createStackNavigator({
    Main,
    GitHub
}, {
    headerMode: 'none'
});

export default createAppContainer(Routes);
