import { UserCredential } from "../service";
export type AuthActionType =
  | "ADD_AUTH_ERR"
  | "SIGN_IN"
  | "CLEAR_AURH_ERR"
  | "SIGN_OUT";

export type ActionAddAuthErr = {
  type: "ADD_AUTH_ERR";
  payload: { errorMessage: string };
};

export type ActionSignIn = {
  type: "SIGN_IN";
  payload: { token: string };
};
export type ActionSignOut = {
  type: "SIGN_OUT";
};
export type ActionClearAuthErr = {
  type: "CLEAR_AURH_ERR";
};

export type AuthAction =
  | ActionAddAuthErr
  | ActionSignIn
  | ActionSignOut
  | ActionClearAuthErr;

export type AuthState = {
  errorMessage: string;
  token: string;
};

export type AuthDispatch = (action: AuthAction) => void;
/* these are the methods available to the caller 
   through context
*/
export type AuthBoundMethods = {
  tryLocalSigin: () => void;
  clearErrorMessage: () => void;
  signup: (cred: UserCredential) => void;
  signin: (cred: UserCredential) => void;
  signout: () => void;
};
