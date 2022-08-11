import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert('You tapped the button!');
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login</Text>
      <TextInput
        style={{width: 200, height: 40, borderWidth: 1}}
        placeholder="Email"
        onChangeText={newText => setEmail(newText)}
        defaultValue={email}
      />
      <TextInput
        style={{width: 200, height: 40, borderWidth: 1}}
        placeholder="Password"
        onChangeText={newText => setPassword(newText)}
        defaultValue={password}
      />
      <View style={{width: 200}}>
        <Button onPress={handleLogin} title="Login" />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
