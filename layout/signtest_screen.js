import React, { useState, useCallback } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert } from "react-native";

const SignTestScreen = ({ navigation }) => {
  const [inputValues, setInputValues] = useState(["", "", "", "", "", ""]); // 입력 값 상태 배열
  const [progress, setProgress] = useState(1); // 진행 상태
  const [error, setError] = useState(""); // 에러 상태
  const [userIdExistsMap, setUserIdExistsMap] = useState({}); // 아이디 중복 여부 맵

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
  const handleButtonClick = useCallback(async () => {
    if (progress < 6) {
      // 다음으로 진행하기 전에 입력 값이 비어 있는지 확인
      if (inputValues[progress - 1].trim() === "") {
        Alert.alert(placeholderTexts[progress - 1] + "을(를) 입력하세요.");
        return;
      }
      // 비밀번호 확인
      if (progress === 4 && inputValues[2] !== inputValues[3]) {
        Alert.alert("비밀번호가 일치하지 않습니다.");
        return;
      }
      setError(""); // 에러 초기화
      // 아이디 중복 확인
      if (progress === 2) {
        const isUserIdExists = await checkUserIdExists(inputValues[1]);
        if (isUserIdExists) {
          Alert.alert("이미 사용 중인 아이디입니다. 다른 아이디를 입력하세요.");
          return;
        }
      }
      setProgress(progress + 1); // 진행 상태 증가
    } else {
      // 진행 상태가 6일 때 완료 처리
      Alert.alert("회원가입이 완료되었습니다.", "", [{ text: "확인", onPress: () => navigation.navigate("login") }]);
      // 서버에 사용자 정보를 전송하는 함수 호출
      await sendUserDataToServer();
      // 완료 후 추가 작업을 수행할 수 있습니다.
    }
  }, [progress, inputValues]);

  // 서버에 사용자 정보를 전송하는 함수
  const sendUserDataToServer = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:8080/users", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: inputValues[0],
          userId: inputValues[1],
          userPw: inputValues[2],
          birthDate: inputValues[4],
          name: inputValues[5]
        })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Data:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  }, [inputValues]);

  // 아이디 중복 검사 함수
  const checkUserIdExists = useCallback(async (userId) => {
    if (userIdExistsMap[userId] !== undefined) {
      return userIdExistsMap[userId];
    }

    try {
      const response = await fetch(`http://localhost:8080/users/UserId/${userId}/exists`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUserIdExistsMap(prevMap => ({ ...prevMap, [userId]: data }));
      return data;
    } catch (error) {
      console.error('Error:', error);
      return false;
    }
  }, [userIdExistsMap]);

  // 다음 버튼 텍스트 결정
  const buttonText = progress === 6 ? "완료" : "다음";

  // 렌더링
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
          value={inputValues[progress - 1]}
          onChangeText={(text) => {
            setInputValues(prevInputValues => {
              const newInputValues = [...prevInputValues];
              newInputValues[progress - 1] = text;
              return newInputValues;
            });
          }}
          style={{
            height: 60,
            paddingHorizontal: 20,
            marginBottom: 40,
            borderWidth: 0,
            fontSize: 24,
          }}
        />
        {/* 에러 메시지 */}
        {error !== "" && <Text style={{ color: "red" }}>{error}</Text>}
      </View>
      {/* 다음 버튼 */}
      <TouchableOpacity
        style={{
          width: 350,
          height: 60,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#3ED4BE",
          borderRadius: 15,
          padding: 15,
          position: "relative",
        }}
        onPress={handleButtonClick}
      >
        <Text style={{ color: "#FFFFFF", fontSize: 24, fontWeight: "bold" }}>{buttonText}</Text>
        <Text style={{ color: "#FFFFFF", fontSize: 18, marginTop: 5 }}>{progress}/6</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignTestScreen;
  