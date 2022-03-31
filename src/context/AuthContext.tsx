import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthState, AuthAction, AuthDispatch, AuthBoundMethods } from ".";
import { navigationRef } from "../navigation";
import { signin as signinSvc, signup as signupSvc } from "../service";
import createDataContext from "./createDataContext";
const authReducer: (state: AuthState, action: AuthAction) => AuthState = (
  state,
  action
) => {
  switch (action.type) {
    case "ADD_AUTH_ERR":
      return { ...state, errorMessage: action.payload.errorMessage };
    case "SIGN_IN":
      return { errorMessage: "", token: action.payload.token };
    case "CLEAR_AURH_ERR":
      return { ...state, errorMessage: "" };
    case "SIGN_OUT":
      return { token: "", errorMessage: "" };
    default:
      return state;
  }
};

const tryLocalSigin: (
  dispatch: AuthDispatch
) => AuthBoundMethods["tryLocalSigin"] = (disptach) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    disptach({ type: "SIGN_IN", payload: { token } });
    navigationRef.navigate("MainFlow", { screen: "TrackListFlow" });
  } else navigationRef.navigate("LoginFlow", { screen: "Signup" });
};

const clearErrorMessage: (
  dispatch: AuthDispatch
) => AuthBoundMethods["clearErrorMessage"] = (dispatch) => async () => {
  dispatch({ type: "CLEAR_AURH_ERR" });
};

const signup: (dispatch: AuthDispatch) => AuthBoundMethods["signup"] =
  (dispatch) => async (cred) => {
    try {
      const { token } = await signupSvc(cred);
      await AsyncStorage.setItem("token", token);
      dispatch({ type: "SIGN_IN", payload: { token } });
      navigationRef.navigate("MainFlow", { screen: "TrackListFlow" });
    } catch (err: any) {
      console.log("AuthContext signup error", err.message);
      dispatch({
        type: "ADD_AUTH_ERR",
        payload: {
          errorMessage: "Something went wrong with sign up",
        },
      });
    }
  };

const signin: (dispatch: AuthDispatch) => AuthBoundMethods["signin"] =
  (dispatch) => async (cred) => {
    try {
      const { token } = await signinSvc(cred);
      await AsyncStorage.setItem("token", token);
      dispatch({ type: "SIGN_IN", payload: { token } });
      navigationRef.navigate("MainFlow", { screen: "TrackListFlow" });
    } catch (err) {
      console.log("AuthContext signin error", err);
      dispatch({
        type: "ADD_AUTH_ERR",
        payload: {
          errorMessage: "Something went wrong with sign in",
        },
      });
    }
  };

const signout: (dispatch: AuthDispatch) => AuthBoundMethods["signout"] =
  (disptach) => async () => {
    await AsyncStorage.removeItem("token");
    disptach({ type: "SIGN_OUT" });
    navigationRef.navigate("LoginFlow", { screen: "Signin" });
  };

export const [AuthProvider, AuthContext] = createDataContext<
  AuthState,
  AuthAction,
  AuthBoundMethods
>(
  authReducer,
  { tryLocalSigin, clearErrorMessage, signup, signin, signout },
  { token: "", errorMessage: "" }
);
