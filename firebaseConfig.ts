import AsyncStorage from "@react-native-async-storage/async-storage";
import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import React from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCtJI8oxSAfJOGpoyTtCd2XnTiE-Qgm0qU",
  authDomain: "gymlab-92972.firebaseapp.com",
  projectId: "gymlab-92972",
  storageBucket: "gymlab-92972.appspot.com",
  messagingSenderId: "63780410559",
  appId: "1:63780410559:web:0f5f47055f53c6a7ff620a"
};

export const FIREBASE_APP: FirebaseApp = initializeApp(firebaseConfig);
export const FIREBASE_AUTH: Auth = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage),
});
