import React from "react";
import { SafeAreaView, View, Text, FlatList } from "react-native";

/* 로그 스크린의 역할:
   사용자의 설문 결과 값을 저장할 예정.
   내용은 일자/설문 결과값
*/

const LogsScreen = () => {
  const logItems = [
    { id: 1, result: "테스트 1 설문 결과" },
    { id: 2, result: "테스트 2 설문 결과" },
    { id: 3, result: "테스트 3 설문 결과" },
    { id: 4, result: "테스트 4 설문 결과" },
    { id: 5, result: "테스트 5 설문 결과" },
    { id: 6, result: "테스트 6 설문 결과" },
    { id: 7, result: "테스트 7 설문 결과" },
    { id: 8, result: "테스트 8 설문 결과" },
    { id: 9, result: "테스트 9 설문 결과" },
    { id: 10, result: "테스트 10 설문 결과" },
    { id: 11, result: "테스트 11 설문 결과" },
    { id: 12, result: "테스트 12 설문 결과" },
	{ id: 13, result: "테스트 13 설문 결과" },
	{ id: 14, result: "테스트 14 설문 결과" },
	{ id: 15, result: "테스트 15 설문 결과" },
	{ id: 16, result: "테스트 16 설문 결과" },
	{ id: 17, result: "테스트 17 설문 결과" },
	{ id: 18, result: "테스트 18 설문 결과" },
	{ id: 19, result: "테스트 19 설문 결과" },
	{ id: 20, result: "테스트 20 설문 결과" },
	{ id: 21, result: "테스트 21 설문 결과" },
	{ id: 22, result: "테스트 22 설문 결과" },
    // 모든 데이터를 한 번에 표시
  ];

  // 각 로그 항목을 렌더링하는 함수
  const renderLogItem = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#5E27FD",
        borderRadius: 12,
        padding: 12,
        marginBottom: 12, // 각 로그 항목 사이의 간격 조정을 위해 추가
      }}
    >
      <Text style={{ color: "#FFFFFF", fontSize: 14 }}>{item.date}</Text>
      <Text style={{ color: "#FFFFFF", fontSize: 14, marginLeft: 10 }}>
        {item.result}
      </Text>
    </View>
  );

  // 바텀 바 컴포넌트
  const botbar = () => (
    <View
      style={{
        height: 40,
        backgroundColor: "#3ED4BE",
        padding: 12,
      }}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF", padding: 12 }}>
      <FlatList
        data={logItems}
        renderItem={renderLogItem}
        keyExtractor={(item) => item.id.toString()}
        style={{
          flex: 1,
          backgroundColor: "#FFFFFF",
        }}
      />
      {botbar()}
    </SafeAreaView>
  );
};

export default LogsScreen;