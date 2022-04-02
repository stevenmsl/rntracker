import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import { UserCredential } from "../service";
import Spacer from "./Spacer";
interface AuthFormProps {
  headerText: string;
  errorMessage: string;
  onSubmit: (cred: UserCredential) => void;
  submitButtonText: string;
}
const AuthForm: React.FC<AuthFormProps> = ({
  headerText,
  errorMessage,
  onSubmit,
  submitButtonText,
}) => {
  const [email, setEmail] = useState("arlo@arlo.com");
  const [password, setPassword] = useState("arlotheper");

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer />
      <Button
        title={submitButtonText}
        onPress={() => onSubmit({ email, password })}
      />
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
});

export default AuthForm;
