import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

// 버튼 컴포넌트
const Button = ({ title, onPress, style }) => (
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
        // 토큰 생성 및 저장
        const token = userId; // 토큰을 사용자 아이디로 저장
        try {
          if (token) {
            AsyncStorage.setItem('userToken', token)
              .then(() => {
                Alert.alert("로그인 성공", `현재 저장된 토큰: ${token}`); // 디버그용 기능, 반환된 토큰
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'muk' }],
                });
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

  // 어플리케이션 시작 시에 로그인 여부를 확인하여 네비게이션 결정
  const checkLoginStatus = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken !== null) {
        // 토큰이 존재하면 로그인 상태로 간주하여 홈으로 이동
        navigation.reset({
          index: 0,
          routes: [{ name: 'muk' }],
        });
      }
    } catch (error) {
      console.error(error);
      // 에러 처리
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
      {/* 상단 여백 */}
      <View style={{ height: 60 }} />

      {/* 로그인 패널 */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          padding: 20,
        }}
      >
        {/* LOGIN 텍스트 */}
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 36, fontWeight: "bold", marginBottom: 20, color: "black" }}>
            LOGIN
          </Text>
        </View>

        {/* 아이디 입력란 */}
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

        {/* 비밀번호 입력란 */}
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

        {/* 로그인 버튼 */}
        <Button title="LOGIN" onPress={handleLogin} />

        {/* 회원가입, 아이디 찾기, 비밀번호 찾기 링크 */}
        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 30 }}>
          <Link title="회원가입" onPress={() => navigation.navigate("signup")} />
        </View>
      </View>

      {/* 하단 바 */}
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
