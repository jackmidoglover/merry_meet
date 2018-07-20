import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Signin from './components/Signin';
import Home from './components/Home';
import SignUp from './components/Signup';

const Application = createStackNavigator({
  Entry: { screen: Signin },
  Home: {screen: Home},
  SignUp: {screen: SignUp},
});


export default class App extends React.Component {
  render() {
    return (
      <Application />

    );
  }
};
