import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, FlatList } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

// LogsScreen 컴포넌트
const LogsScreen = () => {
  const [logItems, setLogItems] = useState([]);

  // API 호출 및 데이터 설정 함수
  const fetchLogItems = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      const response = await fetch(`http://localhost:8080/log/UserId/${userToken}`);
      const data = await response.json();

      // 최신 로그가 1번이 되게 하고 최대 20개만 저장되게 하기 위해 데이터 처리
      const reversedData = data.reverse().slice(0, 20);
      const formattedData = reversedData.map((item, index) => ({
        id: index + 1,
        result: item,
      }));

      setLogItems(formattedData);
    } catch (error) {
      console.error("Error fetching log items:", error);
    }
  };

  // 컴포넌트가 마운트될 때 데이터 가져오기
  useEffect(() => {
    fetchLogItems();
  }, []);

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
      <Text style={{ color: "#FFFFFF", fontSize: 14 }}>{item.id}</Text>
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