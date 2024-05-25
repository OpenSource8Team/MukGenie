import React, { useState, useCallback } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

// 버튼 컴포넌트: 사용자 정의 스타일이 적용된 재사용 가능한 버튼 컴포넌트
const Button = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

// 회원가입 화면 컴포넌트
const SignupScreen = ({ navigation }) => {
  // 상태 관리: 입력 값과 오류 메시지 관리
  const [idValue, setIdValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordConfirmValue, setPasswordConfirmValue] = useState("");
  const [nameValue, setNameValue] = useState("");

  // 중복되는 ID인지 확인하는 함수
  const checkUserIdExists = useCallback(async (userId) => {
    try {
      const response = await fetch(`http://localhost:8080/users/UserId/${userId}/exists`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Response data:', data); // 응답 데이터 로그 출력
      return data; // 서버 응답이 true 또는 false만을 출력하는 경우 그대로 반환
    } catch (error) {
      console.error('Error:', error);
      return false;
    }
  }, []);

  // 중복 검사 핸들러
  const handleCheckDuplicateId = useCallback(async () => {
    try {
      const data = await checkUserIdExists(idValue);
      console.log('Response data:', data); // 추가 로그
      if (data === true) {
        Alert.alert("오류", "중복되는 아이디입니다.");
      } else if (data === false) {
        Alert.alert("확인", "사용 가능한 아이디입니다.");
      } else {
        console.error('Invalid server response:', data);
        Alert.alert("오류", "잘못된 서버 응답이 수신되었습니다.");
      }
    } catch (error) {
      console.error('Error in handleCheckDuplicateId:', error);
      Alert.alert("오류", "중복 확인 중 오류가 발생했습니다.");
    }
  }, [checkUserIdExists, idValue]);

  // 회원가입 버튼 클릭 시 실행되는 함수
  const handleSignup = useCallback(async () => {
    // 텍스트 필드 값이 비어 있는지 확인
    if (!idValue || !passwordValue || !passwordConfirmValue || !nameValue) {
      Alert.alert("오류", "모두 다 입력해 주세요.");
      return;
    }

    // 비밀번호와 비밀번호 확인 값이 일치하는지 확인
    if (passwordValue !== passwordConfirmValue) {
      Alert.alert("오류", "비밀번호가 일치하지 않습니다.");
      return;
    }

    // ID 중복 확인
    const isUserIdExists = await checkUserIdExists(idValue);
    console.log('isUserIdExists on Signup:', isUserIdExists); // 추가 로그
    if (isUserIdExists) {
      Alert.alert("오류", "이미 사용 중인 ID입니다.");
      return;
    }

    // 서버에 회원가입 요청
    fetch("http://localhost:8080/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: idValue,
        userPw: passwordValue,
        name: nameValue,
      }),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        Alert.alert("성공", "회원가입 성공", [
          { text: "확인", onPress: () => navigation.navigate("login") }
        ]);
      })
      .catch((error) => {
        console.error("Error:", error);
        Alert.alert("오류", "회원가입 중 오류가 발생했습니다.");
      });
  }, [idValue, passwordValue, passwordConfirmValue, nameValue, checkUserIdExists, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.inputContainer}>
          {/* ID 입력 필드 */}
          <Text>아이디</Text>
          <View style={styles.row}>
            <TextInput
              placeholder="ID"
              value={idValue}
              onChangeText={setIdValue}
              style={[styles.textInput, { width: 200 }]}
            />
            <Button title="중복확인" onPress={handleCheckDuplicateId} style={styles.checkButton}
            />
          </View>
          {/* 비밀번호 입력 필드 */}
          <Text>비밀번호</Text>
          <TextInput
            placeholder="Password"
            value={passwordValue}
            onChangeText={setPasswordValue}
            secureTextEntry={true}
            style={styles.textInput}
          />
          {/* 비밀번호 확인 입력 필드 */}
          <Text>비밀번호 확인</Text>
          <TextInput
            placeholder="비밀번호 확인"
            value={passwordConfirmValue}
            onChangeText={setPasswordConfirmValue}
            secureTextEntry={true}
            style={styles.textInput}
          />
          {/* 이름 입력 필드 */}
          <Text>이름</Text>
          <TextInput
            placeholder="Name"
            value={nameValue}
            onChangeText={setNameValue}
            style={styles.textInput}
          />
        </View>
        {/* 회원가입 버튼 */}
        <Button title="회원가입" onPress={handleSignup} style={styles.signupButton} />
      </View>
      <View style={styles.footer} />
    </SafeAreaView>
  );
};

// 스타일 정의
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  textInput: {
    color: "#000000",
    fontSize: 14,
    width: 300,
    height: 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 2,
    padding: 12,
    marginBottom: 10,
  },
  checkButton: {
    width: 90,
    height: 40,
    marginLeft: 10,
    borderRadius: 0,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6750A4",
    borderRadius: 90,
    padding: 12,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  signupButton: {
    width: 200,
    height: 40,
  },
  footer: {
    height: 70,
    backgroundColor: "#6750A4",
    padding: 12,
  },
});

export default SignupScreen;
