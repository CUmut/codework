import React from 'react';
import {Dimensions} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Jobs from '../pages/jobs/Jobs';
import JobsDetail from '../pages/jobsDetail/JobsDetail';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Jobs"
        component={Jobs}
        options={{title: 'Jobs', headerTintColor: '#FF5C58'}}
      />
      <Stack.Screen
        name="JobsDetail"
        component={JobsDetail}
        options={({route}) => ({
          title: `${route.params.name}`,
          headerTintColor: '#FF5C58',
          headerTitleAlign: 'center',
        })}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
