import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

/* Common Button Component */
const Button = ({ title, onPress, backgroundColor }) => (
	<TouchableOpacity
		style={{
			margin: 5,
			padding: 10,
			borderRadius: 5,
			backgroundColor: backgroundColor || "#3ED4BE",
		}}
		onPress={onPress}
	>
		<Text style={{ color: "#FFFFFF", fontSize: 14 }}>{title}</Text>
	</TouchableOpacity>
);

/* Survey Setting Component */
const SurveySetting = ({ navigation }) => {
	const [selectedItems, setSelectedItems] = useState([]);

	const handleSelectItem = (item) => {
		setSelectedItems((prevItems) =>
			prevItems.includes(item) ? prevItems : [...prevItems, item]
		);
	};

	const handleRemoveItem = (item) => {
		setSelectedItems((prevItems) => prevItems.filter((i) => i !== item));
	};

	const renderButtons = (items) => (
		<View style={{ flexDirection: "row", justifyContent: "center", padding: 12 }}>
			{items.map((item, index) => (
				<Button key={index} title={item} onPress={() => handleSelectItem(item)} />
			))}
		</View>
	);

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

	const ingredientsGroup1 = ["유제품", "밀가루", "땅콩", "견과류", "대두", "과일"];
	const ingredientsGroup2 = ["채소", "복숭아", "육류", "해산물및어패류", "고수"];
	const ingredientsGroup3 = ["민트", "계란", "오이", "가지", "브로콜리"];

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
			<View style={{ height: 100, justifyContent: "center", padding: 12 }}>
				<Text style={{ color: "#303233", fontSize: 20, textAlign: "center" }}>
					원하지 않는 재료들을 설정해 주세요!
				</Text>
			</View>
			{selectedPane()}
			<View style={{ flex: 1, justifyContent: "center", padding: 12 }}>
				{renderButtons(ingredientsGroup1)}
				{renderButtons(ingredientsGroup2)}
				{renderButtons(ingredientsGroup3)}
			</View>
			<View style={{ height: 70, justifyContent: "center", alignItems: "center" }}>
				<Button title="먹지니 시작하기!" onPress={handleSubmit} />
			</View>
			<View style={{ height: 40, backgroundColor: "#3ED4BE", padding: 12 }} />
		</SafeAreaView>
	);
};

export default SurveySetting;