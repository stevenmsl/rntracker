import "../_mockLocation";
import { LocationCallback } from "expo-location";
import React, { useCallback } from "react";
import { View } from "react-native";
import { MainFlowTabParamList } from "../navigation";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { Text } from "react-native-elements";
import Map from "../component/Map";
import useLocation from "../hook/useLocation";

//TODO: fix backend schema to be the same as LocationObjectCoords object
/*


*/

type TrackCreateScreenProps = BottomTabScreenProps<
  MainFlowTabParamList,
  "TrackCreate"
>;

const TrackCreateScreen: React.FC<TrackCreateScreenProps> = ({
  navigation,
}) => {
  const callback = useCallback<LocationCallback>((location) => {
    console.log(location);
  }, []);

  const [err] = useLocation(true, callback);

  const renderError = () => {
    if (err) {
      if (err instanceof Error)
        return <Text>Please enable location service</Text>;
      else {
        console.log(err);
        return <Text>Unknow error</Text>;
      }
    }
    return null;
  };

  return (
    <View>
      <Text h2>Create a Track</Text>
      <Map />
      {renderError()}
    </View>
  );
};

export default TrackCreateScreen;
