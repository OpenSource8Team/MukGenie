import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

/*  회원가입 스크린의 역할:
    회원가입 버튼이 눌리면, 텍스트 박스에 담긴 텍스트와 데이터베이스의 값을 대조.
    일치하는 내용이 없다면 회원가입 성공, 일치하는 내용이 있다면 오류메시지 출력.
*/

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

const SignupScreen = ({ navigation }) => {
  const [idValue, setIdValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [nameValue, setNameValue] = useState("");

  const idbox = () => {
    return (
      <TextInput
        placeholder="ID"
        value={idValue}
        onChangeText={(text) => setIdValue(text)}
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
    );
  };

  const pwbox = () => {
    return (
      <TextInput
        placeholder="Password"
        value={passwordValue}
        onChangeText={(text) => setPasswordValue(text)}
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
    );
  };

  const namebox = () => {
    return (
      <TextInput
        placeholder="Name"
        value={nameValue}
        onChangeText={(text) => setNameValue(text)}
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
    );
  };

  const buttonpane = () => {
    return (
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
        <Button
          title="Signup"
          onPress={() => {
            // fetch 요청 보내기
            fetch("http://localhost:8080/users", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                user_id: idValue,
                user_pw: passwordValue,
                name: nameValue,
                age: 30
              }),
            })
              .then((response) => {
                if (!response.ok) {
                  throw new Error("Network response was not ok");
                }
                return response.json();
              })
              .then((data) => {
                console.log(data); // 서버로부터 받은 응답 로그에 출력
                // 여기에서 필요한 작업을 수행합니다. 예를 들어, 회원가입 성공 시 다음 화면으로 이동할 수 있습니다.
                //navigation.navigate("SuccessScreen"); 구현 안됨
              })
              .catch((error) => {
                console.error("Error:", error);
                // 오류 발생 시 사용자에게 알림 등을 표시할 수 있습니다.
              });
          }}
        />
      </View>
    );
  };

  const infopane = () => {
    return (
      <View
        style={{
          height: 220,
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          padding: 12,
        }}
      >
        {idbox()}
        {pwbox()}
        {namebox()}
        {buttonpane()}
      </View>
    );
  };

  const botbar = () => {
    return <View style={{ height: 70, backgroundColor: "#6750A4", padding: 12 }} />;
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "space-between", backgroundColor: "#FFFFFF" }}>
      {infopane()}
      {botbar()}
    </SafeAreaView>
  );
};

export default SignupScreen;