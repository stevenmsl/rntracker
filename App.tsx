import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "./src/navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginFlowScreen from "./src/screen/LoginFlowScreen";
import { navigationRef } from "./src/navigation";
import { AuthProvider } from "./src/context/AuthContext";
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginFlow"
          component={LoginFlowScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
