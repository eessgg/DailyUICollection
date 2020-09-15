import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";
import UserAvatar from "./UserAvatar";
const image = require("../../assets/bg.png");

const AppLogin = ({ route, navigation: { goBack } }) => {

  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.container}>
        <UserAvatar />
        <View style={styles.formContainer}>
          <Text style={styles.titleForm}>LOGIN</Text>
          <TextInput placeholder="Enter your name" style={styles.textInput} />
          <TextInput placeholder="Enter your email" style={styles.textInput} />

          <TouchableOpacity style={styles.btnForm}>
            <Text style={styles.btnFormText}>Submit</Text>
          </TouchableOpacity>

          <View style={styles.footerLink}>
            <TouchableOpacity
              onPress={() => goBack()}
              title="Go back from Register Screen"
            >
              <Text>VOLTAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  formContainer: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 23,
    width: "80%",
    minHeight: 350,
    borderRadius: 6,
  },
  titleForm: {
    fontSize: 32,
    paddingVertical: 12,
    color: "#7A7A7A",
    textTransform: "uppercase",
  },
  textInput: {
    width: "90%",
    borderBottomColor: "#A2A2A2",
    borderBottomWidth: 1,
    fontSize: 16,
    padding: 8,
    marginVertical: 12,
  },
  btnForm: {
    backgroundColor: "#BA7AFF",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 22,
    marginTop: 22,
  },
  btnFormText: {
    color: "#fff",
    fontSize: 22,
    paddingHorizontal: 22,
  },
  footerLink: {
    marginTop: 18,
  },
});

export default AppLogin;
