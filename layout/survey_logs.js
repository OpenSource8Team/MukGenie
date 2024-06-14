import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, Linking } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

// LogsScreen 컴포넌트
const LogsScreen = () => {
  const [logItems, setLogItems] = useState([]);
  const [userToken, setUserToken] = useState(null);

  // API 호출 및 데이터 설정 함수
  const fetchLogItems = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      setUserToken(token);
      const response = await fetch(`http://localhost:8080/log/UserId/${token}`);
      const data = await response.json();

      // 최신 로그가 1번이 되게 하고 최대 20개만 저장되게 하기 위해 데이터 처리
      const reversedData = data.reverse().slice(0, 20);
      const formattedData = reversedData.map((item, index) => ({
        id: index + 1, // 클라이언트 측에서 고유 ID 설정
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

  // 로그 항목 삭제 함수
  const deleteLogItem = async (userId, foodName) => {
    try {
      const response = await fetch(`http://localhost:8080/log/delete/${userId}/${foodName}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // 삭제 성공 시, 화면에서 항목 제거
        setLogItems((prevLogItems) => prevLogItems.filter((item) => item.result !== foodName));
      } else {
        console.error('Failed to delete log item');
      }
    } catch (error) {
      console.error("Error deleting log item:", error);
    }
  };

  // 각 로그 항목을 렌더링하는 함수
  const renderLogItem = ({ item }) => {
    const foodName = item.result;

    return (
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#5E27FD",
          borderRadius: 12,
          padding: 12,
          marginBottom: 12, // 각 로그 항목 사이의 간격 조정을 위해 추가
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#FFFFFF", fontSize: 14 }}>{item.id}</Text>
        <Text style={{ color: "#FFFFFF", fontSize: 14, marginLeft: 10, flex: 1 }}>
          {foodName}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => Linking.openURL(`https://www.youtube.com/results?search_query=${foodName} 레시피`)}
            style={{ marginLeft: 10, padding: 5, backgroundColor: "#FFFFFF", borderRadius: 5 }}
          >
            <Text style={{ color: "#5E27FD" }}>YouTube</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL(`https://map.naver.com/p/search/${foodName}`)}
            style={{ marginLeft: 10, padding: 5, backgroundColor: "#FFFFFF", borderRadius: 5 }}
          >
            <Text style={{ color: "#5E27FD" }}>NaverMap</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => deleteLogItem(userToken, foodName)}
            style={{ marginLeft: 10, padding: 5, backgroundColor: "#FFFFFF", borderRadius: 5 }}
          >
            <Text style={{ color: "#5E27FD" }}>삭제</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

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
