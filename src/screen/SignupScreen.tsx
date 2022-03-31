import React, { useEffect, useContext } from "react";
import { LoginFlowStackParamList } from "../navigation";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, StyleSheet } from "react-native";
import AuthForm from "../component/AuthForm";
import NavLink from "../component/NavLink";
import { AuthContext } from "../context/AuthContext";

interface SignupScreenProps
  extends NativeStackScreenProps<LoginFlowStackParamList, "Signup"> {}

const SignupScreen: React.FC<SignupScreenProps> = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext)!;
  /*check the comments on the SigninScreen */
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      clearErrorMessage();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        onSubmit={signup}
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
    marginBottom: 100,
  },
});

export default SignupScreen;
