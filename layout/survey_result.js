import React from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity, Linking } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

// 버튼 컴포넌트
const Button = ({ title, onPress }) => (
    <TouchableOpacity
        style={{
            width: 300,
            height: 40,
            justifyContent: "center",
            alignSelf: "center",
            alignItems: "center",
            borderRadius: 90,
            padding: 10,
        }}
        onPress={onPress}
    >
        <Text style={{ color: "#FFFFFF", fontSize: 14 }}>{title}</Text>
    </TouchableOpacity>
);

// 메모이제이션된 텍스트 컴포넌트
const MemoizedText = React.memo(({ text, fontSize }) => (
    <Text style={{ color: "#303233", fontSize }}>{text}</Text>
));

// 음식 정보 컴포넌트
const foodName = () => <MemoizedText text="짜장면" fontSize={20} />;
const foodDesc = () => <MemoizedText text="음식 설명" fontSize={14} />;

// 결과 화면 컴포넌트
const ResultScreen = ({ navigation }) => {
    // 음식 정보 및 이미지 표시
    const foodpane = () => (
        <View
            style={{
                width: 390,
                height: 400,
                justifyContent: "space-around",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                padding: 12,
            }}>
            {foodName()}
            <Image
                source={require(`./resultimages/짜장면.jpg`)}
                resizeMode="stretch"
                style={{ width: 300, height: 300 }}
            />
            {foodDesc()}
        </View>
    );

    // 유튜브 검색 버튼
    const ytbutton = () => (
        <View style={{ width: 300, height: 40, justifyContent: "center", alignSelf: "center", backgroundColor: "#CD201F", borderRadius: 90, padding: 10 }}>
            <Button title="유튜브로 검색하기!" onPress={() => Linking.openURL(`https://www.youtube.com/results?search_query=${foodName()}레시피`)} />
        </View>
    );

    // 네이버 맵 검색 버튼
    const nmbutton = () => (
        <View style={{ width: 300, height: 40, justifyContent: "center", alignSelf: "center", backgroundColor: "#00C300", borderRadius: 90, padding: 10 }}>
            <Button title="네이버 맵으로 주변 음식점 검색하기!" onPress={() => Linking.openURL(`https://map.naver.com`)} />
        </View>
    );

    // 메인으로 돌아가는 버튼
    const bmbutton = () => (
        <View style={{ width: 300, height: 40, justifyContent: "center", alignSelf: "center", backgroundColor: "#6750A4", borderRadius: 90, padding: 10 }}>
            <Button title="메인으로 돌아가기!" onPress={() => navigation.reset({ index: 0, routes: [{ name: 'muk' }] })} />
        </View>
    );

    // 바텀 바 컴포넌트
    const botbar = () => (
        <View style={{ height: 40, alignItems: "stretch", backgroundColor: "#3ED4BE", padding: 12 }} />
    );

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "space-between", backgroundColor: "#FFFFFF" }}>
            {foodpane()}
            {ytbutton()}
            {nmbutton()}
            {bmbutton()}
            {botbar()}
        </SafeAreaView>
    );
};

export default ResultScreen;
