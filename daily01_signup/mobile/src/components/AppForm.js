import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const AppForm = () => {

  function handleSubmit() {
    alert("handleSubmit");
  }

  return (
    <View style={styles.formContainer}>
      <Text style={styles.titleForm}>Sign UP</Text>
      <TextInput placeholder="Enter your name" style={styles.textInput} />
      <TextInput placeholder="Enter your email" style={styles.textInput}  onChangeText={handleSubmit} />

      <TouchableOpacity style={styles.btnForm}>
        <Text style={styles.btnFormText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 23,
    width: 350,
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
    borderBottomColor: "#AF81FF",
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
    marginTop:22
  },
  btnFormText: {
    color: "#fff",
    fontSize: 22,
    paddingHorizontal: 22,
  },
});

export default AppForm;
