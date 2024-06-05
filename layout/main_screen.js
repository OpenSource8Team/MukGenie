import React from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

/* 메인 스크린의 역할:
    어플리케이션이 실행되면 바로 송출될 스크린.
    유저 버튼은 유저의 정보(아이디 비밀번호 이름등) 과 로그아웃을 담당
    스타트 버튼은 설문 설정 화면으로 이동됨.
    로그 버튼은 설문 로그 화면으로 이동됨.(현 테스트 버튼)
    이미지는 빈 공간, 디자인 추가나 기능 추가로 변경될 가능성 있음.
*/

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
        padding: 5,
      }}
      onPress={onPress}
    >
      <Text style={{ color: "#FFFFFF", fontSize: 14 }}>{title}</Text>
    </TouchableOpacity>
  );
};

const MainScreen = ({ navigation }) => {

  // 버튼 정렬하는 부분
  const buttonPane = () => {
    return (
      <View
        style={{
          height: 70,
          alignSelf: "stretch",
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "#FFFFFF",
          padding: 12,
        }}
      >
        <Button
          title="유저"
          onPress={() => navigation.navigate("user")}
        />
        <Button
          title="시작"
          onPress={() => navigation.navigate("surveysetting")}
        />
        <Button
          title="테스트"
          onPress={() => navigation.navigate("signtest")}
        />
      </View>
    );
  };

  // 버튼과 이미지 정렬하는 부분
  const mainPane = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          padding: 12,
        }}
      >
        <Image
          source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
          resizeMode={"stretch"}
          style={{ width: 300, height: 300 }}
        />
        {buttonPane()}
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "space-between", backgroundColor: "#FFFFFF" }}>
      {mainPane()}
      <View style={{ height: 40, backgroundColor: "#6750A4", padding: 12 }} />
    </SafeAreaView>
  );
};

export default MainScreen;
