import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

// 버튼 컴포넌트: 재사용 가능한 버튼 컴포넌트
const Button = ({ title, onPress, backgroundColor }) => (
    <TouchableOpacity
        style={{
            margin: 5,
            padding: 10,
            borderRadius: 5,
            backgroundColor: backgroundColor || "#6750A4",
        }}
        onPress={onPress}
    >
        <Text style={{ color: "#FFFFFF", fontSize: 14 }}>{title}</Text>
    </TouchableOpacity>
);

// 설문 설정 화면 컴포넌트
const SurveySetting = ({ navigation }) => {
    // 선택된 항목 상태 관리
    const [selectedItems, setSelectedItems] = useState([]);

    // 항목 선택 핸들러
    const handleSelectItem = (item) => {
        setSelectedItems((prevItems) =>
            prevItems.includes(item) ? prevItems : [...prevItems, item]
        );
    };

    // 항목 제거 핸들러
    const handleRemoveItem = (item) => {
        setSelectedItems((prevItems) => prevItems.filter((i) => i !== item));
    };

    // 항목 버튼 렌더링
    const renderButtons = (items) => (
        <View style={{ flexDirection: "row", justifyContent: "center", padding: 12 }}>
            {items.map((item, index) => (
                <Button key={index} title={item} onPress={() => handleSelectItem(item)} />
            ))}
        </View>
    );

    // 선택된 항목 표시 컴포넌트
    const selectedPane = () => (
        <View
            style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                backgroundColor: "#E0E0E0",
                padding: 12,
                marginVertical: 10,
                borderRadius: 5,
            }}
        >
            {selectedItems.map((item, index) => (
                <Button
                    key={index}
                    title={item}
                    onPress={() => handleRemoveItem(item)}
                    backgroundColor="#FF0000"
                />
            ))}
        </View>
    );

    // 재료 그룹
    const ingredientsGroup1 = ["유제품", "밀가루", "땅콩", "견과류", "대두", "과일"];
    const ingredientsGroup2 = ["채소", "복숭아", "육류", "해산물및어패류", "고수"];
    const ingredientsGroup3 = ["민트", "계란", "오이", "가지", "브로콜리"];

    // 제출 핸들러
    const handleSubmit = async () => {
        if (selectedItems.length === 0) {
            navigation.reset({ index: 0, routes: [{ name: 'survey' }] });
            return; // 선택된 항목이 없으면 다음 화면으로 바로 이동
        }

        try {
            const queryParams = selectedItems.map(item => `allergies=${encodeURIComponent(item)}`).join('&');
            const response = await fetch(`http://localhost:8080/hate/allergy?${queryParams}`);

            if (response.ok) {
                navigation.reset({ index: 0, routes: [{ name: 'survey' }] });
            } else {
                console.error('Failed to fetch data from server');
            }
        } catch (error) {
            console.error('Error occurred while fetching data:', error);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "space-between", backgroundColor: "#FFFFFF" }}>
            {/* 설문 설정 화면 레이아웃 */}
            <View style={{ height: 100, justifyContent: "center", padding: 12 }}>
                <Text style={{ color: "#303233", fontSize: 20, textAlign: "center" }}>
                    원하지 않는 재료들을 설정해 주세요!
                </Text>
            </View>
				{renderButtons(ingredientsGroup1)}
                {renderButtons(ingredientsGroup2)}
                {renderButtons(ingredientsGroup3)}
            <View style={{ flex: 1, justifyContent: "center", padding: 12 }}>
                {/* 각 재료 그룹에 대한 버튼 렌더링 */}
				{selectedPane()}
				
            </View>
            <View style={{ height: 70, justifyContent: "center", alignItems: "center" }}>
                {/* 제출 버튼 */}
                <Button title="먹지니 시작하기!" onPress={handleSubmit} />
            </View>
            {/* 바텀 바 */}
            <View style={{ height: 40, backgroundColor: "#6750A4", padding: 12 }} />
        </SafeAreaView>
    );
};

export default SurveySetting;
