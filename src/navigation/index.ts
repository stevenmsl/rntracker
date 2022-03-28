import {
  createNavigationContainerRef,
  useNavigation,
  NavigatorScreenParams,
} from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type LoginFlowStackParamList = {
  Signup: undefined;
  Signin: undefined;
};
export type LoginFlowRoutes = keyof LoginFlowStackParamList;

/*navigate back and forth between the 
  track list and the track detail
*/
export type TrackListFlowStackParamList = {
  TrackList: undefined;
  TrackDetail: undefined;
};

/*
  - switch among three tabs: 
    - track list, track create, and account
  - note that track list is a nested navigator
*/
export type MainFlowTabParamList = {
  TrackListFlow: NavigatorScreenParams<TrackListFlowStackParamList> | undefined;
  TrackCreate: undefined;
  Account: undefined;
};

// TODO: add ResolveAuth
export type RootStackParamList = {
  LoginFlow: NavigatorScreenParams<LoginFlowStackParamList> | undefined;
  MainFlow: NavigatorScreenParams<MainFlowTabParamList> | undefined;
};

export const useLoginFlowNavigation = () =>
  useNavigation<NativeStackNavigationProp<LoginFlowStackParamList>>();

export const navigationRef = createNavigationContainerRef<RootStackParamList>();
