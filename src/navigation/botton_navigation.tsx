import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {tab_screens} from './root_data';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator>
      {tab_screens.map((tab, index) => (
        <Tab.Screen
          key={`tab_${index}`}
          name={tab.name}
          component={tab.Component}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
