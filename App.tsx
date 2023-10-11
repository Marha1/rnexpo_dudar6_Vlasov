import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { gStyle } from "./styles/styles";
import AppLoading from "expo-app-loading";
import MainStack from "./perexod";
import * as Font from "expo-font";

const fonts = () =>
  Font.loadAsync({
    "mt-blod": require("./assets/fonts/Montserrat-Italic-VariableFont_wght.ttf"),
    "mt-light": require("./assets/fonts/Montserrat-VariableFont_wght.ttf"),
  });

export default function App() {
  const [font, setFont] = useState(false);
  if (font) {
    return <MainStack />;
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError={console.warn}
      />
    );
  }
}

const styles = StyleSheet.create({});
