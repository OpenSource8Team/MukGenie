import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

// 버튼 컴포넌트: 사용자 정의 스타일이 적용된 재사용 가능한 버튼 컴포넌트
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
        padding: 12,
      }}
      onPress={onPress}
    >
      <Text style={{ color: "#FFFFFF", fontSize: 14 }}>{title}</Text>
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
  const [errorMessage, setErrorMessage] = useState("");
  const [isIdDuplicate, setIsIdDuplicate] = useState(false);

  // 중복되는 ID인지 확인하는 함수
  const handleCheckDuplicateId = () => {
    fetch("http://localhost:8080/users/UserId/${idValue}")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        if (response.status === 404) {
          return null; // ID가 존재하지 않는 경우
        }
        throw new Error("Network response was not ok");
      })
      .then(data => {
        if (data) {
          setIsIdDuplicate(true);
          setErrorMessage("이미 사용 중인 ID입니다.");
        } else {
          setIsIdDuplicate(false);
          setErrorMessage("");
        }
      })
      .catch(error => {
        console.error("Error:", error);
        setErrorMessage("ID 확인 중 오류가 발생했습니다.");
      });
  };

 // 회원가입 버튼 클릭 시 실행되는 함수
 const handleSignup = () => {
   // 텍스트 필드 값이 비어 있는지 확인
   if (!idValue || !passwordValue || !passwordConfirmValue || !nameValue) {
     Alert.alert("모두 다 입력해 주세요.");
     return;
   }

   // 비밀번호와 비밀번호 확인 값이 일치하는지 확인
   if (passwordValue !== passwordConfirmValue) {
     setErrorMessage("비밀번호가 일치하지 않습니다.");
     return;
   }

   // ID 중복 확인
   if (isIdDuplicate) {
     setErrorMessage("이미 사용 중인 ID입니다.");
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
       name: nameValue
     }),
   })
     .then((response) => {
       if (!response.ok) {
         throw new Error("Network response was not ok");
       }
       return response.json();
     })
     .then((data) => {
       console.log(data);
       Alert.alert("회원가입 성공");
       navigation.navigate("login");
     })
     .catch((error) => {
       console.error("Error:", error);
       setErrorMessage("회원가입 중 오류가 발생했습니다.");
     });
 };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "space-between", backgroundColor: "#FFFFFF" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ marginBottom: 20 }}>
          {/* ID 입력 필드 */}
          <TextInput
            placeholder="ID"
            value={idValue}
            onChangeText={setIdValue}
            style={{
              color: "#000000",
              fontSize: 14,
              width: 200,
              height: 40,
              backgroundColor: "#FFFFFF",
              borderRadius: 12,
              borderWidth: 2,
              padding: 12,
              marginBottom: 10,
            }}
          />
          {/* 비밀번호 입력 필드 */}
          <TextInput
            placeholder="Password"
            value={passwordValue}
            onChangeText={setPasswordValue}
            secureTextEntry={true}
            style={{
              color: "#000000",
              fontSize: 14,
              width: 200,
              height: 40,
              backgroundColor: "#FFFFFF",
              borderRadius: 12,
              borderWidth: 2,
              padding: 12,
              marginBottom: 10,
            }}
          />
          {/* 비밀번호 확인 입력 필드 */}
          <TextInput
            placeholder="비밀번호 확인"
            value={passwordConfirmValue}
            onChangeText={setPasswordConfirmValue}
            secureTextEntry={true}
            style={{
              color: "#000000",
              fontSize: 14,
              width: 200,
              height: 40,
              backgroundColor: "#FFFFFF",
              borderRadius: 12,
              borderWidth: 2,
              padding: 12,
              marginBottom: 10,
            }}
          />
          {/* 이름 입력 필드 */}
          <TextInput
            placeholder="Name"
            value={nameValue}
            onChangeText={setNameValue}
            style={{
              color: "#000000",
              fontSize: 14,
              width: 200,
              height: 40,
              backgroundColor: "#FFFFFF",
              borderRadius: 12,
              borderWidth: 2,
              padding: 12,
              marginBottom: 10,
            }}
          />
        </View>
        {/* 회원가입 버튼 */}
        <Button title="회원가입" onPress={handleSignup} />
        {/* 오류 메시지 표시 */}
        {errorMessage ? <Text style={{ color: 'red', marginTop: 10 }}>{errorMessage}</Text> : null}
      </View>
      <View style={{ height: 70, backgroundColor: "#6750A4", padding: 12 }} />
    </SafeAreaView>
  );
};

export default SignupScreen;
