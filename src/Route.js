import React from 'react';

import {createAppContainer} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Login from './screens/Login';
import Register from './screens/Register';


const AuthenticateStack = createStackNavigator({
    Login:{
      screen:Login,
      navigationOptions:{
          header:null
      }
    },//home altından geri tuşuna bastıgımızda home'a geri gidebilmesi için altına detail ekledik.
    Register:{
        screen:Register,
        navigationOptions:{
            header:null
        }
    }
  });
export default createAppContainer(AuthenticateStack);
