import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const SignTestScreen = ({ navigation }) => {
  const [email, setEmail] = useState(""); // 이메일 입력 값을 관리하는 상태
  const [progress, setProgress] = useState(1); // 진행 상태를 나타내는 상태

  // Placeholder text array for each progress stage
  const placeholderTexts = [
    "이메일을 입력하세요",
    "아이디를 입력하세요",
    "비밀번호를 입력하세요",
    "비밀번호를 다시 입력하세요",
    "YY/MM/DD",
    "이름을 입력하세요"
  ];

  const handleButtonClick = () => {
    // Handle button click logic here
    if (progress < 6) {
      // Check if the email is empty before proceeding
      if (progress === 1 && email.trim() === "") {
        alert("이메일을 입력하세요.");
        return;
      }
      setProgress(progress + 1); // Increment the progress count
    }
  };

  const Button = ({ title }) => (
    <TouchableOpacity
      style={{
        width: 400,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#6750A4",
        borderRadius: 15,
        padding: 15,
        position: "relative",
      }}
      onPress={handleButtonClick}
    >
      <Text style={{ color: "#FFFFFF", fontSize: 24, fontWeight: "bold" }}>{title}</Text>
      <Text style={{ color: "#FFFFFF", fontSize: 18 }}>{progress}/6</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 24,
        paddingVertical: 40,
      }}
    >
      <View>
        {/* 이메일 텍스트와 입력 필드 */}
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
          {progress === 1 ? "이메일" : progress === 2 ? "아이디" : progress === 3 ? "비밀번호" : progress === 4 ? "비밀번호 확인" : progress === 5 ? "생년월일" : "이름"}
        </Text>
        <TextInput
          placeholder={placeholderTexts[progress - 1]}
          value={email}
          onChangeText={setEmail}
          style={{
            height: 60,
            paddingHorizontal: 20,
            marginBottom: 40,
            borderWidth: 0,
            fontSize: 24,
          }}
        />
      </View>
      {/* 결과 화면으로 버튼 */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 40,
        }}
      >
        <Button title="다음" />
      </View>
    </SafeAreaView>
  );
};


export default SignTestScreen;
