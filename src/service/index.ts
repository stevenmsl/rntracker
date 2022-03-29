import axios, { AxiosRequestConfig } from "axios";
import AsyncStorge from "@react-native-async-storage/async-storage";
const baseUrl = "http://localhost:3000";

export type UserCredential = {
  email: string;
  password: string;
};
export type AuthResponse = {
  token: string;
};

const trackSvc = axios.create({
  baseURL: baseUrl,
});

const setRequestConfig = async (config: AxiosRequestConfig) => {
  const token = await AsyncStorge.getItem("token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

trackSvc.interceptors.request.use(setRequestConfig);

export const signup = async (cred: UserCredential) => {
  const res = await trackSvc.post<AuthResponse>("/signup", cred);
  return res.data;
};

export const signin = async (cred: UserCredential) => {
  const res = await trackSvc.post<AuthResponse>("/signin", cred);
  return res.data;
};
