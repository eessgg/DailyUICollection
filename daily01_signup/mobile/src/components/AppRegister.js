import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";
import UserAvatar from './UserAvatar'
const image = require("../../assets/bg.png");

const AppRegister = ({ navigation }) => {
  function handleSubmit() {
    alert("handleSubmit");
  }
 
  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.container}>
        <UserAvatar />
        <View style={styles.formContainer}>
          <Text style={styles.titleForm}>Sign UP</Text>
          <TextInput
            placeholder="Enter your name"
            style={styles.textInput}
          />
          <TextInput
            placeholder="Enter your email"
            style={styles.textInput}
            onChangeText={handleSubmit}
          />

          <TouchableOpacity style={styles.btnForm}>
            <Text style={styles.btnFormText}>Submit</Text>
          </TouchableOpacity>

          <View style={styles.footerLink}>
            <TouchableOpacity
              onPress={() => navigation.push("AppLogin", { contact: "ester" })}
              title="Go back from Register Screen"
            >
              <Text>Já possui conta? Faça o login aqui</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View  style={[styles.footerLoginBtn, styles.loginGoogle]}>
          <Text style={styles.loginText}>SIGN UP WITH GOOGLE</Text>
        </View>
        <View style={[styles.footerLoginBtn, styles.loginFacebook]}>
          <Text style={styles.loginText}>SIGN UP WITH FACEBOOK</Text>
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
    padding: 18,
    width: "80%",
    minHeight: 350,
    borderRadius: 6,
    zIndex: 2,
    elevation:2
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
  footerLoginBtn: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    alignContent: "center",
    alignItems: "center",
    padding: 12,
    paddingTop: 28,
    width: "80%",
  },
  loginGoogle: {
    backgroundColor: "#8C44C9",
    top: -16,
    zIndex: 1,
    elevation: 1,
  },
  loginFacebook: {
    backgroundColor: "#6F2CA8",
    top: -30,
    zIndex: 0,
    elevation: 0,
  },
  loginText: {
    color: "#fff",
    elevation: 3,
  },
});

export default AppRegister;
