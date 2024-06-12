import React, { useState } from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

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
        "곡류가 중심인 음식을 먹고 싶은가요?",
        "해산물이 중심인 음식을 먹고 싶은가요?",
    ],
    [
        "뜨거운 음식을 먹고 싶은가요?",
        "차가운 음식을 먹고 싶은가요?",
    ],
    [
        "매운 음식을 먹고 싶은가요?",
    ],
    [
        "국물이 있는 음식을 먹고 싶은가요?",
    ],
    [
        "기름기 있는 음식을 먹고 싶은가요?",
    ],
    [
        "삶은 음식을 먹고 싶은가요?",
        "끓인 음식을 먹고 싶은가요?",
        "튀긴 음식을 먹고 싶은가요?",
        "구운 음식을 먹고 싶은가요?",
        "볶은 음식을 먹고 싶은가요?",
        "비조리 음식을 먹고 싶은가요?"
    ]
];

const temporaryAnswers = [];

const answerMappings = [
    ["한식", "일식", "중식", "양식"],
    ["육류", "채소류", "과일", "곡류", "수산류"],
    [1, 2, 3],
    [true, false],
    [true, false],
    [true, false],
    ["삶기", "끓이기", "튀기기", "굽기", "볶기", "비조리"]
];

const SurveyScreen = ({ navigation }) => {
    const [groupIndex, setGroupIndex] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [result, setResult] = useState(null);

    const goToNext = () => {
        if (questionIndex < questionGroups[groupIndex].length - 1) {
            setQuestionIndex(questionIndex + 1);
        } else if (groupIndex < questionGroups.length - 1) {
            setGroupIndex(groupIndex + 1);
            setQuestionIndex(0);
        } else {
            sendSurveyResult();
        }
    };

    const handleAnswer = (isYes) => {
        if (!isYes && questionIndex === questionGroups[groupIndex].length - 1) {
            if (groupIndex === 0) {
                temporaryAnswers.push("기타");
            } else if (groupIndex === 1) {
                temporaryAnswers.push("육류");
            } else if (groupIndex === 2) {
                temporaryAnswers.push(2);
            } else if (groupIndex === 3 || groupIndex === 4 || groupIndex === 5) {
                temporaryAnswers.push(answerMappings[groupIndex][1]);
            }
            goToNext();
        } else if (isYes) {
            temporaryAnswers.push(answerMappings[groupIndex][questionIndex]);
            if (groupIndex < questionGroups.length - 1) {
                setGroupIndex(groupIndex + 1);
                setQuestionIndex(0);
            } else {
                sendSurveyResult();
            }
        } else {
            goToNext();
        }
    };

    const sendSurveyResult = () => {
        const params = new URLSearchParams();
        params.append('category', temporaryAnswers[0]);
        params.append('ingredient', temporaryAnswers[1]);
        params.append('temperature', temporaryAnswers[2]);
        params.append('spiciness', temporaryAnswers[3]);
        params.append('broth', temporaryAnswers[4]);
        params.append('oiliness', temporaryAnswers[5]);
        params.append('cookingType', temporaryAnswers[6]);

        fetch(`http://localhost:8080/foods/result?${params.toString()}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            console.log('Success:', data);
            setResult(data); // 결과 상태 변수에 저장
            navigation.navigate("result", { result: data }); // 결과 화면으로 결과 전달
            temporaryAnswers.length = 0; // temporaryAnswers 배열 초기화

        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

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
                    <Button title="예" onPress={() => handleAnswer(true)} />
                    <Button title="아니오" onPress={() => handleAnswer(false)} />
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
