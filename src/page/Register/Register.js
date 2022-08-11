import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    alert('You tapped the button!');
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Register</Text>
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
        <Button onPress={handleRegister} title="Register" />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
