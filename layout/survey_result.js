import React from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity, Linking} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

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

const MemoizedText = React.memo(({ text, fontSize }) => (
    <Text style={{ color: "#303233", fontSize }}>{text}</Text>
));

const foodName = () => <MemoizedText text="짜장면" fontSize={20} />;//테스트 위해 짜장면으로 하드코딩함, 이후 설문 알고리즘 완성되면 바꿀것.
const foodDesc = () => <MemoizedText text="음식 설명" fontSize={14} />;

const ResultScreen = ({navigation}) => {
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
                source={{uri:"https://i.imgur.com/1tMFzp8.png"}}
                resizeMode="stretch"
                style={{ width: 300, height: 300 }}
            />
            {foodDesc()}
        </View>
    );

    const ytbutton = () => (
        <View style={{ width: 300, height: 40, justifyContent: "center", alignSelf: "center", backgroundColor: "#CD201F", borderRadius: 90, padding: 10 }}>
            <Button title="유튜브로 검색하기!" onPress={() => Linking.openURL(`https://www.youtube.com/results?search_query=${foodName().props.text}`)} />
        </View>//foodname값을 서치 쿼리에 집어넣어 검색한 화면으로 이동
    );

    const nmbutton = () => (
        <View style={{ width: 300, height: 40, justifyContent: "center", alignSelf: "center", backgroundColor: "#00C300", borderRadius: 90, padding: 10 }}>
            <Button title="네이버 맵으로 주변 음식점 검색하기!" onPress={() => Linking.openURL(`https://map.naver.com`)} />
        </View>
    );

    const bmbutton = () => (
        <View style={{ width: 300, height: 40, justifyContent: "center", alignSelf: "center", backgroundColor: "#3ED4BE", borderRadius: 90, padding: 10 }}>
            <Button title="메인으로 돌아가기!" onPress={() => navigation.reset({
			index: 0,
			routes:[{name : 'muk'}]
		})} />
        </View>
    );

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
