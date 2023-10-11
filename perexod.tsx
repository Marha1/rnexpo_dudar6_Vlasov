import React from "react";
import Main from "./components/Main";
import Contact from "./components/Contacts";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Perexod() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: "Главня" }}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{ title: "Контакты" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
