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
    this.props.navigation.navigate('Main');
  }
}

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
        <View style={styles.container}>

          <Text style={styles.header}> Sign In </Text>

          <TextInput
              style={styles.textInput} placeholder="Username"
              onChangeText={(username) =>this.setState({username})}
              underlineColorAndroid="transparent"
              />

              <TextInput
              style={styles.textInput} placeholder="Password"
              onChangeText={(password) =>this.setState({password})}
              underlineColorAndroid="transparent"
              />

              <TouchableOpacity
                  style={styles.btn}
                  onPress={this.login}>
                  <Text> Log In </Text>
              </TouchableOpacity>

              <TouchableOpacity
                  style={styles.btn2}
                  onPress={() => this.props.navigation.navigate('SignUp')}>
                  <Text> Sign Up </Text>
              </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    );
  }


  login = () => {
    fetch('http://10.0.0.43:3001/users/signin', {
        method: 'POST', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: this.state.username, 
            password: this.state.password
        })
    })
    .then(response => response.json())
    .then((res) => {
        if(res.success === true){
            AsyncStorage.setItem('user', res.user.username);
            this.props.navigation.navigate('Home');
        }
        else {
            alert(res.message);
        }
    })
    .done();
};

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
  textInput: {
    alignSelf: 'stretch', 
    padding: 16, 
    marginBottom: 20, 
    backgroundColor: '#fff',
  },
  btn: {
    alignSelf: 'stretch',
    backgroundColor: '#01c853',
    padding: 20, 
    alignItems: 'center',
  },
  btn2: {
    alignSelf: 'stretch', 
    backgroundColor: '#fff', 
    padding: 20, 
    marginTop: 10, 
    alignItems: 'center',
  }
});
