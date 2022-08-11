import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import firebase from "../../config/firebase";

const Login = (props) => {
  // console.log(props);
  var navigation = props.navigation;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // alert("You tapped the button!");
    // console.log(firebase);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        console.log("User logged-in successfully!");

        navigation.navigate("Home");
      })
      .catch((error) => alert(error));
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: 20 }}>
        Login
      </Text>
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
        <Button onPress={handleLogin} title="Login" />
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

export default Login;

const styles = StyleSheet.create({});
