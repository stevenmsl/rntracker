import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainFlowTabParamList } from "../navigation";
import TrackListFlowScreen from "./TrackListFlowScreen";

const Tab = createBottomTabNavigator<MainFlowTabParamList>();

const MainFlowScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TrackListFlow" component={TrackListFlowScreen} />
    </Tab.Navigator>
  );
};

export default MainFlowScreen;
