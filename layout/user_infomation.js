import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Button = ({ title, onPress }) => (
  <TouchableOpacity
    style={{
      width: 100,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#3ED4BE",
      borderRadius: 90,
      padding: 5,
    }}
    onPress={onPress}
  >
    <Text style={{ color: "#FFFFFF", fontSize: 14 }}>{title}</Text>
  </TouchableOpacity>
);

const InfoScreen = ({ navigation }) => {
  const username = '유저의 이름값'; // db값, 혹은 연결된 계정의 이름값
  const idvalue = '유저의 아이디값'; // db값, 혹은 연결된 계정의 아이디 값
  const pwvalue = '유저의 비밀번호값'; // db값, 혹은 연결된 계정의 비밀번호 값

  const logout = async () => {
    try {
      	await AsyncStorage.removeItem('userToken');
    	navigation.reset({
			index: 0,
			routes:[{name : 'login'}]
		})
    } catch (error) {
      console.error('로그아웃 에러:', error);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",
      }}>
      <View style={{ height: 40 }} />
      <View
        style={{
          height: 220,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          padding: 12,
        }}>
        <Text style={{ fontSize: 20 }}> 이름     : {username}</Text>
        <Text style={{ fontSize: 20 }}> 아이디   : {idvalue}</Text>
        <Text style={{ fontSize: 20 }}> 비밀번호 : {pwvalue}</Text>
      </View>
      <View
        style={{
          alignSelf: "stretch",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          padding: 12,
        }}>
        <Button title="로그아웃" onPress={logout} />
      </View>
      <View
        style={{
          height: 40,
          backgroundColor: "#3ED4BE",
          padding: 12,
        }}>
      </View>
    </SafeAreaView>
  );
}

export default InfoScreen;
