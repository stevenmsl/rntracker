//TODO: 1. access context

import React from "react";
import { View, StyleSheet, Text } from "react-native";

const TrackListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>TackListScreen</Text>
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

export default TrackListScreen;
