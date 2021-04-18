import ChatScreen from '../screens/ChatScreen';
import HomeScreen from '../screens/home/HomeScreen';
import BottomTabNavigation from './botton_navigation';

const screens: {name: string; Component: React.FC; Options: Object}[] = [
  {
    name: 'Bottom',
    Component: BottomTabNavigation,
    Options: {header: () => null},
  },
  {
    name: 'home',
    Component: HomeScreen,
    Options: {},
  },
  {
    name: 'chat',
    Component: ChatScreen,
    Options: {},
  },
];

const tab_screens: {name: string; Component: React.FC}[] = [
  {
    name: 'home',
    Component: HomeScreen,
  },
  {
    name: 'chat',
    Component: ChatScreen,
  },
];

export {screens, tab_screens};
