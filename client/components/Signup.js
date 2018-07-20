import React from 'react';
import { StyleSheet, 
Text, 
View,
TextInput,
KeyboardAvoidingView, 
TouchableOpacity,
AsyncStorage,
} from 'react-native';
import { StackNavigator } from 'react-navigation';



 

export default class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      passsword: '',
      religion: '', 
      imageUrl: '', 
      bio: '',
      zipcode: '',
    }
  };

  componentDidMount(){

  };
  


  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
        <View style={styles.container}>

          <Text style={styles.header}> Sign Up </Text>

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

              <TextInput
              style={styles.textInput} placeholder="Religion"
              onChangeText={(religion) =>this.setState({religion})}
              underlineColorAndroid="transparent"
              />

              <TextInput
              style={styles.textInput} placeholder="Profile Image URL"
              onChangeText={(imageUrl) =>this.setState({imageUrl})}
              underlineColorAndroid="transparent"
              />

              <TextInput
              style={styles.textInput} placeholder="Bio"
              onChangeText={(bio) =>this.setState({bio})}
              underlineColorAndroid="transparent"
              />

              <TextInput
              style={styles.textInput} placeholder="Zipcode"
              onChangeText={(zipcode) =>this.setState({zipcode})}
              underlineColorAndroid="transparent"
              />

              <TouchableOpacity
                  style={styles.btn}
                  onPress={this.signup}>
                  <Text> Log In </Text>
              </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    );
  }

  signup = () => {
    fetch('http://10.0.0.43:3001/users/signup', {
        method: 'POST', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: this.state.username, 
            password: this.state.password,
            religion: this.state.religion, 
            imageUrl: this.state.imageUrl, 
            bio: this.state.bio,
            zipcode: this.state.zipcode,
        })
    })
    .then(response => response.json())
    .then((res) => {
      alert(res.message);
        
    })
    .done();
}
};
;


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
  }
});