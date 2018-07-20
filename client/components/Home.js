import React from 'react';
import { StyleSheet, 
Text, 
View,
TextInput,
KeyboardAvoidingView, 
TouchableOpacity,
AsyncStorage,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';


 

export default class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      passsword: '',
    }
  };

  componentDidMount(){
    this._loadInitialState().done();

  };
  
_loadInitialState = async () => {
  let value = await AsyncStorage.getItem('user');
  if (value !== null) {
    this.props.navigation.navigate('Home');
  }
}

  render() {
    return (

        <View style={styles.container}>

          <Text style={styles.header}> Home </Text>

 
        </View>
    );
  }

 
};


const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2896d3', 
    paddingLeft: 40,
    paddingRight: 40, 
  }, 
  header: {
    fontSize: 24,
    marginBottom: 60, 
    color: '#fff',
    fontWeight: 'bold',
  },
});