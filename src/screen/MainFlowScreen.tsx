import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainFlowTabParamList } from "../navigation";
import TrackCreateScreen from "./TrackCreateScreen";
import TrackListFlowScreen from "./TrackListFlowScreen";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator<MainFlowTabParamList>();

/* 
  - set different icons for each tab right 
    on this screen instead of inside each 
    individual screen as it's too late
*/

const MainFlowScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TrackListFlow"
        component={TrackListFlowScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="TrackCreate"
        component={TrackCreateScreen}
        options={{
          title: "Add Track",
          tabBarIcon: () => <FontAwesome name="plus" size={20} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainFlowScreen;
