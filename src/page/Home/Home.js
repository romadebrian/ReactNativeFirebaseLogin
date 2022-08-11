import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import firebase from "../../config/firebase";

const Home = (props) => {
  var navigation = props.navigation;

  const [email, setEmail] = useState("");

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setEmail(user.email);
        console.log(user);
      } else {
        // User is signed out
        // ...
      }
    });
  });

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => navigation.navigate("Login"));
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home</Text>
      <Text>Welcome {email}</Text>
      <Button onPress={handleSignOut} title="Logout" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
