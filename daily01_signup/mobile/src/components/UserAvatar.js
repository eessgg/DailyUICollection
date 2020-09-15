import React from 'react';
import { View, Text, StyleSheet } from "react-native";

const UserAvatar = () => {
  return (
    <View>
      <View style={styles.avatarContainer}>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatarContainer:{
    backgroundColor:'#fdf',
    width:160,
    height:160,
    borderRadius:90,
    margin:20,
    borderWidth:10,
    borderColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  },
});

export default UserAvatar;
