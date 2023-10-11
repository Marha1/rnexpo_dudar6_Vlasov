import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { gStyle } from "../styles/styles";

type MainProps = {
  navigation: any;
};
export default function Main(props: MainProps) {
  const loadScene = () => {
    props.navigation.navigate("Contact");
  };

  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>Главная Страница</Text>
      <Button title="Открыть страницу" onPress={loadScene} />
    </View>
  );
}

const style = StyleSheet.create({});
