import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from "react-native";

const SignTestScreen = ({ navigation }) => {
  const [inputValue, setInputValue] = useState(""); // 입력 값 상태
  const [progress, setProgress] = useState(1); // 진행 상태

  // 각 진행 상태에 대한 플레이스홀더 텍스트 배열
  const placeholderTexts = [
    "이메일",
    "아이디",
    "비밀번호",
    "비밀번호 확인",
    "YY/MM/DD",
    "이름"
  ];

  // 다음 버튼 클릭 시 처리 함수
  const handleButtonClick = () => {
    if (progress < 6) {
      // 다음으로 진행하기 전에 입력 값이 비어 있는지 확인
      if (inputValue.trim() === "") {
        alert(placeholderTexts[progress - 1] + "을(를) 입력하세요.");
        return;
      }
      setProgress(progress + 1); // 진행 상태 증가
    }
  };

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
        {/* 제목 텍스트 */}
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
          {placeholderTexts[progress - 1]}
        </Text>
        {/* 입력 필드 */}
        <TextInput
          placeholder={placeholderTexts[progress - 1] + "을(를) 입력하세요"}
          value={inputValue}
          onChangeText={setInputValue}
          style={{
            height: 60,
            paddingHorizontal: 20,
            marginBottom: 40,
            borderWidth: 0,
            fontSize: 24,
          }}
        />
      </View>
      {/* 다음 버튼 */}
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
        <Text style={{ color: "#FFFFFF", fontSize: 24, fontWeight: "bold" }}>다음</Text>
        <Text style={{ color: "#FFFFFF", fontSize: 18 }}>{progress}/6</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignTestScreen;
