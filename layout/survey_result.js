import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Linking } from "react-native";
import FastImage from "react-native-fast-image";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Button = ({ title, onPress, backgroundColor }) => (
  <TouchableOpacity
    style={{
      width: 300,
      height: 40,
      justifyContent: "center",
      alignSelf: "center",
      alignItems: "center",
      borderRadius: 90,
      padding: 10,
      backgroundColor: backgroundColor,
    }}
    onPress={onPress}
  >
    <Text style={{ color: "#FFFFFF", fontSize: 14 }}>{title}</Text>
  </TouchableOpacity>
);

const ResultScreen = ({ route, navigation }) => {
  const { result } = route.params;
  const [photoUrl, setPhotoUrl] = useState(null);

useEffect(() => {
  const fetchPhoto = async () => {
    try {
      // Unsplash로부터 이미지 URL 직접 가져오기
      const photoUrl = `https://source.unsplash.com/400x300/?${result}`;
      setPhotoUrl(photoUrl);
    } catch (error) {
      console.error("Error fetching photo:", error);
    }
  };

  fetchPhoto();
}, [result]);
  const foodPane = () => (
    <View
      style={{
        width: 390,
        height: 400,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        padding: 12,
      }}
    >
      <Text style={{ color: "#303233", fontSize: 20 }}>{result}</Text>
      {photoUrl && (
        <FastImage
          source={{ uri: photoUrl }}
          resizeMode={FastImage.resizeMode.contain}
          style={{ width: 200, height: 200 }}
        />
      )}
    </View>
  );

  const ytButton = () => (
    <Button
      title="유튜브로 레시피 검색하기!"
      backgroundColor="#CD201F"
      onPress={() =>
        Linking.openURL(`https://www.youtube.com/results?search_query=${result}+레시피`)
      }
    />
  );

  const nmButton = () => (
    <Button
      title="네이버 맵으로 주변 음식점 검색하기!"
      backgroundColor="#00C300"
      onPress={() => Linking.openURL(`https://map.naver.com/v5/search/${result}`)}
    />
  );

  const bmButton = () => (
    <Button
      title="메인으로 돌아가기!"
      backgroundColor="#6750A4"
      onPress={() => navigation.navigate("muk")}
    />
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",
      }}
    >
      {foodPane()}
      {ytButton()}
      {nmButton()}
      {bmButton()}
      <View style={{ height: 40, backgroundColor: "#6750A4" }} />
    </SafeAreaView>
  );
};

export default ResultScreen;
