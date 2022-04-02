import React from "react";
import { Text, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";

const Map = () => {
  let initiaLocation = {
    latitude: 49.13757173228552,
    longitude: -123.1453698616553,
  };
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...initiaLocation,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Circle
        center={{ ...initiaLocation }}
        radius={30}
        strokeColor="rgba(158, 158, 255, 1.0)"
        fillColor="rgba(158, 158, 255, 0.3)"
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: { height: 300 },
});

export default Map;
