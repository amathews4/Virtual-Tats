import React from "react";
import { Text, View} from "react-native";

export default function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" , backgroundColor: "grey"}}>
        <Text>Home!</Text>
      </View>
    );
  }