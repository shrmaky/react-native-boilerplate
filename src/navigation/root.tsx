import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StackNavigation from './stack_navigation';
import BottomTabNavigation from './botton_navigation';

const Stack = createStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default Root;
