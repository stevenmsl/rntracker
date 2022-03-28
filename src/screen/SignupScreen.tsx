import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AuthForm from "../component/AuthForm";
import NavLink from "../component/NavLink";

// TODO: 1. navigation event 2. access context

const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage=""
        onSubmit={() => {}}
        submitButtonText="Sign Up"
      />
      <NavLink
        text="Already have an account? Sign in instead!"
        routeName="Signin"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});

export default SignupScreen;
