import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import Favorite from '../pages/FavoritePage/Favorite';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: '#FF5C58',
      }}>
      <Drawer.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{
          headerShown: false,
          title: 'Jobs',
        }}
      />
      <Drawer.Screen
        name="Favorite"
        component={Favorite}
        options={{
          title: 'Favorited Jobs',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
