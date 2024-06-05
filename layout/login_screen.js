import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
<<<<<<< Updated upstream
=======
import AsyncStorage from '@react-native-async-storage/async-storage';
>>>>>>> Stashed changes

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

// 링크 컴포넌트
const Link = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={{ color: "#000000", fontSize: 16 }}>{title}</Text>
  </TouchableOpacity>
);

// 로그인 스크린 컴포넌트
const LoginScreen = ({ navigation }) => {
  // 로그인 정보 상태
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  // 로그인 함수
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
<<<<<<< Updated upstream
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

=======
    .then((response) => {
      if (!response.ok) {
        throw new Error("로그인 실패");
      }
      return response.json();
    })
    .then((data) => {
      AsyncStorage.setItem('userToken', data.token); // 로그인 성공 시 AsyncStorage에 토큰 저장
      Alert.alert("로그인 성공");
      navigation.reset({
        index: 0,
        routes: [{ name: 'muk' }], // 메인 화면으로 이동
      });
    })
    .catch((error) => {
      console.error(error);
      Alert.alert("로그인 실패", "아이디 또는 비밀번호가 올바르지 않습니다.");
    });
  };

  // 화면 로드 시 로그인 상태 확인
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const userToken = await AsyncStorage.getItem('userToken');
        if (userToken !== null) { // 토큰이 있는 경우 메인 화면으로 스택 리셋
          navigation.reset({
            index: 0,
            routes: [{ name: 'muk' }],
          });
        } else { // 토큰이 없는 경우 로그인 화면으로 유지
          navigation.navigate('login');
        }
      } catch (error) {
        console.error(error);
      }
    };

    checkLoginStatus();
  }, []);

>>>>>>> Stashed changes
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

        {/* 회원가입, 아이디 찾기, 비밀번호 찾기 링크. 다만 회원가입만 구현됨 */}
        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 30 }}>
          <Link title="회원가입" onPress={() => navigation.navigate("signup")} />
          <Text style={{ color: "#000000", fontSize: 16, marginHorizontal: 15 }}>|</Text>
          <Link title="아이디 찾기" onPress={() => Alert.alert("아이디 찾기")} />
          <Text style={{ color: "#000000", fontSize: 16, marginHorizontal: 15 }}>|</Text>
          <Link title="비밀번호 찾기" onPress={() => Alert.alert("비밀번호 찾기")} />
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
