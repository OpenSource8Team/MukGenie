import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

// 버튼 컴포넌트
const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        width: 100,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#6750A4",
        borderRadius: 90,
        padding: 10,
      }}
      onPress={onPress}
    >
      <Text style={{ color: "#FFFFFF", fontSize: 14 }}>{title}</Text>
    </TouchableOpacity>
  );
};

const LoginScreen = ({ navigation }) => {
  // 아이디와 비밀번호를 저장할 상태 변수
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  // 로그인 버튼을 눌렀을 때 실행되는 함수
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
        // 서버에서 반환된 데이터에 따라 처리
        console.log(data);
        Alert.alert("로그인 성공");
        // 예를 들어, 로그인 성공 시 네비게이션 이동 등을 수행할 수 있습니다.
        navigation.navigate("muk");
      })
      .catch((error) => {
        console.error(error);
        Alert.alert("로그인 실패", "아이디 또는 비밀번호가 올바르지 않습니다.");
      });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* 상단 여백 */}
      <View style={{ height: 40, padding: 12 }} />

      {/* 로그인 패널 */}
      <View
        style={{
          height: 180,
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          padding: 12,
        }}
      >
        {/* 아이디 입력란 */}
        <TextInput
          placeholder="ID"
          value={userId}
          onChangeText={setUserId}
          style={{
            color: "#303033",
            fontSize: 14,
            width: 200,
            height: 40,
            backgroundColor: "#FFFFFF",
            borderColor: "#C896FF",
            borderRadius: 12,
            borderWidth: 2,
            padding: 12,
          }}
        />

        {/* 비밀번호 입력란 */}
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={{
            color: "#303033",
            fontSize: 14,
            width: 200,
            height: 40,
            backgroundColor: "#FFFFFF",
            borderColor: "#C896FF",
            borderRadius: 12,
            borderWidth: 2,
            padding: 12,
          }}
        />

        {/* 로그인 및 회원가입 버튼 패널 */}
        <View
          style={{
            alignSelf: "stretch",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            padding: 12,
          }}
        >
          <Button title="로그인" onPress={handleLogin} />
          <Button title="회원가입" onPress={() => navigation.navigate("signup")} />
        </View>
      </View>

      {/* 하단 바 */}
      <View
        style={{
          height: 40,
          backgroundColor: "#6750A4",
          padding: 12,
        }}
      />
    </SafeAreaView>
  );
};

export default LoginScreen;
