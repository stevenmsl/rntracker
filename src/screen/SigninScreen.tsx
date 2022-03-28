import React, { useLayoutEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { LoginFlowStackParamList } from "../navigation";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import AuthForm from "../component/AuthForm";
import NavLink from "../component/NavLink";

// TODO: 1. navigation event 2. access context

interface SigninScreenProps
  extends NativeStackScreenProps<LoginFlowStackParamList, "Signin"> {}

const SigninScreen: React.FC<SigninScreenProps> = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In to Your Account"
        errorMessage=""
        onSubmit={() => {}}
        submitButtonText="Sign In"
      />
      <NavLink
        text="Don't have an account? Sign up instead"
        routeName="Signup"
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

export default SigninScreen;
