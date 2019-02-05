import React from 'react';
import {Text, View, TextInput, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
   input: {
     width: 250,
     margin: 5
   }
 });

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }

  render() {
    return (
      <View style = {{alignItems: 'center', justifyContent: 'center', flex: 1}}>
     <TextInput
       style={styles.input}
       onChangeText={(text) => this.setState({username: text})}
       placeholder="username"
     />
     <TextInput
       style={styles.input}
       secureTextEntry={true}
       onChangeText={(text) => this.setState({password: "*"})}
       placeholder="password"
     />
     <Button
       onPress={this.submit}
       title="Submit"
       color="#9D2235"
     />
   </View>
 );
}
submit() {
//Do Something
}
}
