import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

// 버튼 컴포넌트
const Button = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity
      style={[
        {
          width: 250,
          height: 60,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000000",
          fontWeight: "bold",
          borderRadius: 10,
          padding: 15,
        },
        style,
      ]}
      onPress={onPress}
    >
      <Text style={{ color: "#FFFFFF", fontSize: 18 }}>{title}</Text>
    </TouchableOpacity>
  );
};

const Link = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={{ color: "#000000", fontSize: 16 }}>{title}</Text>
  </TouchableOpacity>
);

const LoginScreen = ({ navigation }) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const handleLogin = () => {
    fetch("http://localhost:8080/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        password: password,
      }),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("로그인 실패");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      try {
        if (data.token) {
          AsyncStorage.setItem('userToken', data.token)
            .then(() => {
              Alert.alert("로그인 성공");
              navigation.navigate("muk");
            })
            .catch((error) => {
              console.error('AsyncStorage 에러:', error);
              Alert.alert("토큰 저장 실패", error.message);
            });
        } else {
          throw new Error("토큰이 존재하지 않습니다");
        }
      } catch (error) {
        console.error('AsyncStorage 에러:', error);
        Alert.alert("토큰 저장 실패", error.message);
      }
    })
    .catch((error) => {
      console.error('로그인 에러:', error);
      Alert.alert("로그인 실패", "아이디 또는 비밀번호가 올바르지 않습니다.");
    });
  };

  const checkLoginStatus = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken !== null) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'muk'}]}),
      } else {
        navigation.navigate('');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",
        padding: 20,
      }}
    >
      <View style={{ height: 60 }} />

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          padding: 20,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 36, fontWeight: "bold", marginBottom: 20, color: "black" }}>
            LOGIN
          </Text>
        </View>

        <TextInput
          placeholder="ID"
          value={userId}
          onChangeText={setUserId}
          style={{
            color: "#000000",
            fontSize: 16,
            width: 250,
            height: 50,
            backgroundColor: "#FFFFFF",
            borderColor: "#000000",
            borderWidth: 2,
            padding: 15,
            marginBottom: 25,
          }}
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={{
            color: "#000000",
            fontSize: 16,
            width: 250,
            height: 50,
            backgroundColor: "#FFFFFF",
            borderColor: "#000000",
            borderWidth: 2,
            padding: 15,
            marginBottom: 25,
          }}
        />

        <Button title="LOGIN" onPress={handleLogin} />

        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 30 }}>
          <Link title="회원가입" onPress={() => navigation.navigate("signup")} />
          <Text style={{ color: "#000000", fontSize: 16, marginHorizontal: 15 }}>|</Text>
          <Link title="아이디 찾기" onPress={() => Alert.alert("아이디 찾기")} />
          <Text style={{ color: "#000000", fontSize: 16, marginHorizontal: 15 }}>|</Text>
          <Link title="비밀번호 찾기" onPress={() => Alert.alert("비밀번호 찾기")} />
        </View>
      </View>

      <View
        style={{
          width: "100%",
          height: 40,
          backgroundColor: "#FFFFFF",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      />
    </SafeAreaView>
  );
};

export default LoginScreen;
