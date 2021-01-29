import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SingIn';
import SignUp from '../pages/SignUp';

const Auth = createStackNavigator();

const authRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: '#312e38',
      },
    }}
    initialRouteName="SignUp"
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
  </Auth.Navigator>
);

export default authRoutes;
