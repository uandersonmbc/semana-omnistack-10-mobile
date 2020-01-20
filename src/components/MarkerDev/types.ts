import { User } from '../../shared/types';
import { NavigationScreenProp, NavigationParams } from 'react-navigation';
export interface AvatarDevProps {
    data: User;
    open: NavigationScreenProp<any, NavigationParams>;
}
