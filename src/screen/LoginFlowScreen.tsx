import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginFlowStackParamList } from "../navigation";
import SigninScreen from "./SigninScreen";
import SignupScreen from "./SignupScreen";

const Stack = createNativeStackNavigator<LoginFlowStackParamList>();

/*two different approaches to hide the header */
const LoginFlowScreen = () => {
  return (
    <Stack.Navigator>
      {/*approach 1 */}
      <Stack.Screen name="Signin" component={SigninScreen} />
      {/*approach 2 */}
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default LoginFlowScreen;
