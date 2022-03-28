import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "./src/navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginFlowScreen from "./src/screen/LoginFlowScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginFlow" component={LoginFlowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
