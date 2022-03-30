import React, { useLayoutEffect, useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { LoginFlowStackParamList } from "../navigation";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import AuthForm from "../component/AuthForm";
import NavLink from "../component/NavLink";
import { AuthContext } from "../context/AuthContext";

interface SigninScreenProps
  extends NativeStackScreenProps<LoginFlowStackParamList, "Signin"> {}

const SigninScreen: React.FC<SigninScreenProps> = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext)!;
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  /* possible scenario:
     - you are navigating from signup screen which already
       has error message appeared on that screen; you 
       don't want to show it here on this signin screen
  */
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      clearErrorMessage();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In to Your Account"
        errorMessage={state.errorMessage}
        onSubmit={signin}
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
