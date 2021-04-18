import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {screens} from './root_data';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator headerMode="none">
      {screens.map((screen, index) => (
        <Stack.Screen
          options={screen.Options}
          key={`stack_${index}`}
          name={screen.name}
          component={screen.Component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default StackNavigation;
