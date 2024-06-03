import React, { useState } from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

/* 설문 스크린의 역할:
    질문에 맞춰 설문하는 버튼. 4버튼에서 예 아니오 2버튼으로 바꿈
    질문이 나오는 방식은 signtest_screen에서 참조*/

// 버튼 컴포넌트
const Button = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                width: 170,
                height: 70,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#6750A4",
                borderRadius: 90,
                padding: 12,
            }}
            onPress={onPress}
        >
            <Text style={{ color: "#FFFFFF", fontSize: 14 }}>{title}</Text>
        </TouchableOpacity>
    );
};

// 질문 그룹  4개의 그룹에
const questionGroups = [
    [
        "한국 음식을 먹고 싶은가요?",
        "일본 음식을 먹고 싶은가요?",
        "중국 음식을 먹고 싶은가요?",
        "서양 음식을 먹고 싶은가요?"
    ],
    [
        "육류가 중심인 음식을 먹고 싶은가요?",
        "채소가 중심인 음식을 먹고 싶은가요?",
        "과일이 중심인 음식을 먹고 싶은가요?",
        "곡류가 중심인 음식을 먹고 싶은가요?"
    ],
    [
        "해산물이 중심인 음식을 먹고 싶은가요?",
        "뜨거운 음식을 먹고 싶은가요?",
        "매운 음식을 먹고 싶은가요?",
        "국물이 있는 음식을 먹고 싶은가요?"
    ],
    [
        "기름기 있는 음식을 먹고 싶은가요?",
        "삶거나 찐 음식을 먹고 싶은가요?",
        "튀긴 음식을 먹고 싶은가요?",
        "구운 음식을 먹고 싶은가요?"
    ],
    [
        "볶은 음식을 먹고 싶은가요?", // 추가된 질문
        "비조리 음식을 먹고 싶은가요?" // 추가된 질문
    ]
];

// 설문 화면 컴포넌트
const SurveyScreen = ({ navigation }) => {
    const [groupIndex, setGroupIndex] = useState(0); // 질문 그룹 인덱스 상태
    const [questionIndex, setQuestionIndex] = useState(0); // 질문 인덱스 상태

    // 답변 처리 함수
    const handleAnswer = () => {
        if (questionIndex < questionGroups[groupIndex].length - 1) {
            setQuestionIndex(questionIndex + 1); // 다음 질문으로 이동
        } else if (groupIndex < questionGroups.length - 1) {
            setGroupIndex(groupIndex + 1); // 다음 질문 그룹으로 이동
            setQuestionIndex(0); // 다음 질문 그룹의 첫 번째 질문으로 초기화
        } else {
            console.log("test")
            fetch("http://localhost:8080/foods/arff") // GET request
                .then((response) => {
                    // Handle the response if needed
                    navigation.navigate("result"); // Navigate to the result screen
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
    };

    //컴포넌트 배치
    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: "space-between",
                backgroundColor: "#FFFFFF",
            }}
        >
            <View
                style={{
                    flex: 1,
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#FFFFFF",
                    padding: 50,
                }}
            >
                <Text
                    style={{
                        color: "#303233",
                        fontSize: 20,
                        fontWeight: "bold",
                    }}
                >
                    질문 {groupIndex * 4 + questionIndex + 1}
                </Text>
                <Text
                    style={{
                        color: "#303233",
                        fontSize: 20,
                    }}
                >
                    {questionGroups[groupIndex][questionIndex]}
                </Text>
                <View
                    style={{
                        height: 350,
                        alignSelf: "stretch",
                        justifyContent: "center",
                        backgroundColor: "#FFFFFF",
                    }}
                >
                    <Image
                        source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                        resizeMode={"stretch"}
                        style={{
                            flex: 1,
                        }}
                    />
                </View>
            </View>
            <View
                style={{
                    height: 200,
                    justifyContent: "center",
                    backgroundColor: "#FFFFFF",
                    paddingHorizontal: 12,
                }}
            >
                <View
                    style={{
                        height: 100,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Button title="예" onPress={handleAnswer} />
                    <Button title="아니오" onPress={handleAnswer} />
                </View>
            </View>
            <View
                style={{
                    height: 40,
                    backgroundColor: "#6750A4",
                }}
            />
        </SafeAreaView>
    );
};

export default SurveyScreen;
