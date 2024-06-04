import React from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

/* 	메인 스크린의 역할:
    어플리케이션이 실행되면 바로 송출 될 스크린.
    로그인 버튼은 로그인 되어있는 상태라면 유저 버튼으로 바뀜. (해당 부분 조사 필요.)
    스타트 버튼은 설문 설정 화면으로 이동됨.
    로그 버튼은 설문 로그 화면으로 이동됨.
    이미지는 빈 공간, 디자인 추가나 기능 추가로 변경될 가능성 있음.
*/

const Button = ({ title, onPress }) => {// 버튼을 누르면 확인이 가능하게 끔 색을 바꿈
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
  
  const buttonpane = () => {//버튼 정렬하는 판
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
          onPress={() => navigation.navigate("user")
        }
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

  const mainpane = () => {//버튼과 이미지 정렬용
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
        <Image //이미지, 로고나 캐릭터를 넣을 공간
          source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
          resizeMode={"stretch"}
          style={{ width: 300, height: 300 }}
        />
        {buttonpane()}
      </View>
    );
  };

  const botbar = () => {// 바텀바, 큰 특징 없음, 디자인용.
    return <View style={{ height: 40, backgroundColor: "#6750A4", padding: 12 }} />;
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "space-between", backgroundColor: "#FFFFFF" }}>

      {mainpane()}
      {botbar()}
    </SafeAreaView>
  );
};

export default MainScreen;
