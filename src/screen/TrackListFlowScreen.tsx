import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TrackListFlowStackParamList } from "../navigation";
import TrackListScreen from "./TrackListScreen";
const Stack = createNativeStackNavigator<TrackListFlowStackParamList>();

const TrackListFlowScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TrackList"
        component={TrackListScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default TrackListFlowScreen;
