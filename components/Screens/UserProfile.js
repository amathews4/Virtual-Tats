import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import fire from "../Firebase";

const handleLogout = () => {
  fire.auth().signOut();
};

export default class UserProfileView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.userInfo}>jhonnydoe@mail.com </Text>
          </View>
        </View>
        <View style={styles.logOut}>
          <TouchableOpacity onPress={handleLogout}>
            <MaterialCommunityIcons name="logout" size={24} color="black" />
          </TouchableOpacity>
          <Text>Log Out</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
  },
  headerContent: {
    padding: 20,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: "600",
  },
  userInfo: {
    fontSize: 16,
    color: "#778899",
    fontWeight: "600",
  },
  body: {
    backgroundColor: "white",
    height: 500,
    alignItems: "center",
  },

  logOut: {
    // width: '100%',
    // height: '50%',
    // justifyContent: 'center',
    // alignItems: 'center'
    
    position: 'relative',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
