import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import firebase from "../../config/firebase";

const Register = (props) => {
  var navigation = props.navigation;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // alert("You tapped the button!");

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigation.navigate("Home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Register</Text>
      <TextInput
        style={{ width: 200, height: 40, borderWidth: 1 }}
        placeholder="Email"
        onChangeText={(newText) => setEmail(newText)}
        defaultValue={email}
      />
      <TextInput
        style={{ width: 200, height: 40, borderWidth: 1 }}
        placeholder="Password"
        onChangeText={(newText) => setPassword(newText)}
        defaultValue={password}
      />
      <View style={{ width: 200 }}>
        <Button onPress={handleRegister} title="Register" />
      </View>

      <TouchableOpacity
        style={{ width: 200, marginTop: 20 }}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={{ color: "blue" }}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
