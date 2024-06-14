import React, { useEffect } from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity, Linking } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from '@react-native-async-storage/async-storage';

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

// 이미지 경로 매핑 객체
const imageMapping = {
    "갈비": require('./resultimages/갈비.jpg'),
    "감바스": require('./resultimages/감바스.jpg'),
    "김밥": require('./resultimages/김밥.jpg'),
    "꿔바로우": require('./resultimages/꿔바로우.jpg'),
    "된장찌개": require('./resultimages/된장찌개.jpg'),
    "딤섬": require('./resultimages/딤섬.jpg'),
    "떡볶이": require('./resultimages/떡볶이.jpg'),
    "라멘": require('./resultimages/라멘.jpg'),
    "라자냐": require('./resultimages/라자냐.jpg'),
    "릭사": require('./resultimages/릭사.jpg'),
    "마파두부": require('./resultimages/마파두부.jpg'),
    "미소시루": require('./resultimages/미소시루.jpg'),
    "볶음밥": require('./resultimages/볶음밥.jpg'),
    "북경오리": require('./resultimages/북경오리.jpg'),
    "불고기": require('./resultimages/불고기.jpg'),
    "브리또": require('./resultimages/브리또.jpg'),
    "비빔밥": require('./resultimages/비빔밥.jpg'),
    "사시미": require('./resultimages/사시미.jpg'),
    "삼계탕": require('./resultimages/삼계탕.jpg'),
    "샌드위치": require('./resultimages/샌드위치.jpg'),
    "샐러드": require('./resultimages/샐러드.jpg'),
    "샤오룽바오": require('./resultimages/샤오룽바오.jpg'),
    "스시": require('./resultimages/스시.jpg'),
    "스테이크": require('./resultimages/스테이크.jpg'),
    "스파게티": require('./resultimages/스파게티.jpg'),
    "야키소바": require('./resultimages/야키소바.jpg'),
    "양꼬치": require('./resultimages/양꼬치.jpg'),
    "오코노미야끼": require('./resultimages/오코노미야끼.jpg'),
    "우동": require('./resultimages/우동.jpg'),
    "육개장": require('./resultimages/육개장.jpg'),
    "잡채": require('./resultimages/잡채.jpg'),
    "짜장면": require('./resultimages/짜장면.jpg'),
    "짬뽕": require('./resultimages/짬뽕.jpg'),
    "치킨윙": require('./resultimages/치킨윙.jpg'),
    "카츠동": require('./resultimages/카츠동.jpg'),
    "커리": require('./resultimages/커리.jpg'),
    "케밥": require('./resultimages/케밥.jpg'),
    "타코": require('./resultimages/타코.jpg'),
    "타코야키": require('./resultimages/타코야키.jpg'),
    "탕수육": require('./resultimages/탕수육.jpg'),
    "텐푸라": require('./resultimages/텐푸라.jpg'),
    "파스타": require('./resultimages/파스타.jpg'),
    "파에야": require('./resultimages/파에야.jpg'),
    "포": require('./resultimages/포.jpg'),
    "푸틴": require('./resultimages/푸틴.jpg'),
    "프렌치 프라이": require('./resultimages/프렌치프라이.jpg'),
    "피자": require('./resultimages/피자.jpg'),
    "필라프": require('./resultimages/필라프.jpg'),
    "해물파전": require('./resultimages/해물파전.jpg'),
    "햄버거": require('./resultimages/햄버거.jpg')
    // 다른 음식 이미지들 추가
};

// 음식 정보 컴포넌트
const foodNameComponent = (foodName) => <MemoizedText text={foodName} fontSize={20} />;
const foodDesc = () => <MemoizedText text="음식 설명" fontSize={14} />;

// 결과 화면 컴포넌트
const ResultScreen = ({ route, navigation }) => {
    const { foodName } = route.params;

    useEffect(() => {
        logFoodName(foodName);
    }, [foodName]);

    // 푸드네임을 AsyncStorage에 저장하는 함수
    const logFoodName = async (foodName) => {
        try {
            await AsyncStorage.setItem('foodToken', foodName);
            console.log('음식 토큰이 AsyncStorage에 저장되었습니다.');
            logFoodNameToServer(foodName);
        } catch (error) {
            console.error('음식 토큰 저장 실패:', error);
        }
    };

    // 서버에 푸드네임과 유저아이디를 저장하는 함수
    const logFoodNameToServer = async (foodName) => {
        try {
            const userToken = await AsyncStorage.getItem('userToken');
            if (userToken) {
                const response = await fetch(`http://localhost:8080/log/add/${userToken}/${foodName}`, {
                    method: 'POST',
                });
                if (response.ok) {
                    console.log('서버에 음식 토큰이 저장되었습니다.');
                } else {
                    console.error('서버에 음식 토큰 저장 실패:', response.statusText);
                }
            } else {
                console.error('유저 토큰을 찾을 수 없습니다.');
            }
        } catch (error) {
            console.error('서버 요청 실패:', error);
        }
    };

    // AsyncStorage에서 푸드네임을 제거하는 함수
    const resetFoodToken = async () => {
        try {
            await AsyncStorage.removeItem('foodToken');
            console.log('음식 토큰이 초기화되었습니다.');
        } catch (error) {
            console.error('음식 토큰 초기화 실패:', error);
        }
    };

    // 음식 정보 및 이미지 표시
    const foodPane = () => (
        <View
            style={{
                width: 390,
                height: 400,
                justifyContent: "space-around",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                padding: 12,
            }}>
            {foodNameComponent(foodName)}
            <Image
                source={imageMapping[foodName]}
                resizeMode="stretch"
                style={{ width: 300, height: 300 }}
            />
            {foodDesc()}
        </View>
    );

    // 유튜브 검색 버튼
    const ytButton = () => (
        <View style={{ width: 300, height: 40, justifyContent: "center", alignSelf: "center", backgroundColor: "#CD201F", borderRadius: 90, padding: 10 }}>
            <Button title="유튜브로 검색하기!" onPress={() => Linking.openURL(`https://www.youtube.com/results?search_query=${foodName} 레시피`)} />
        </View>
    );

    // 네이버 맵 검색 버튼
    const nmButton = () => (
        <View style={{ width: 300, height: 40, justifyContent: "center", alignSelf: "center", backgroundColor: "#00C300", borderRadius: 90, padding: 10 }}>
            <Button title="네이버 맵으로 주변 음식점 검색하기!" onPress={() => Linking.openURL(`https://map.naver.com`)} />
        </View>
    );

    // 메인으로 돌아가는 버튼
    const bmButton = () => (
        <View style={{ width: 300, height: 40, justifyContent: "center", alignSelf: "center", backgroundColor: "#6750A4", borderRadius: 90, padding: 10 }}>
            <Button title="메인으로 돌아가기!" onPress={() => {
                // AsyncStorage에서 푸드네임 초기화
                resetFoodToken();
                // navigation을 이용하여 메인 화면으로 이동
                navigation.reset({ index: 0, routes: [{ name: 'muk' }] });
            }} />
        </View>
    );

    // 바텀 바 컴포넌트
    const botBar = () => (
        <View style={{ height: 40, alignItems: "stretch", backgroundColor: "#3ED4BE", padding: 12 }} />
    );

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "space-between", backgroundColor: "#FFFFFF" }}>
            {foodPane()}
            {ytButton()}
            {nmButton()}
            {bmButton()}
            {botBar()}
        </SafeAreaView>
    );
};

export default ResultScreen;
