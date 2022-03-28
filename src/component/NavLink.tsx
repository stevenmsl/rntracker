import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { LoginFlowRoutes, useLoginFlowNavigation } from "../navigation";
import Spacer from "./Spacer";

interface NavLinkProps {
  text: string;
  routeName: LoginFlowRoutes;
}

const NavLink: React.FC<NavLinkProps> = ({ text, routeName }) => {
  const navigation = useLoginFlowNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(routeName);
      }}
    >
      <Spacer>
        <Text style={styles.link}>{text}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "blue",
  },
});

export default NavLink;
