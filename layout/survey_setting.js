import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

/* 	설문 설정 스크린의 역할:
	설문을 시작하기 전, 사용자의 취향에 따라 품목을 설정.
	라디오 버튼으로 설정할 예정. <- 버튼으로 바꿈 */
const Button = ({ title, onPress }) => {
	return (
		<TouchableOpacity
			style={{	
				marginHorizontal: 5,
				fontSize: 14,
				backgroundColor: "#6750A4",
				padding: 10,
				borderRadius: 5
			}}
			onPress={onPress}
		>
			<Text style={{ color: "#FFFFFF", fontSize: 14 }}>{title}</Text>
		</TouchableOpacity>
	);
};

const SelectedButton = ({ title, onRemove }) => {
	return (
		<TouchableOpacity
			style={{
				margin: 5,
				fontSize: 14,
				backgroundColor: "#FF0000",
				padding: 10,
				borderRadius: 5
			}}
			onPress={onRemove}
		>
			<Text style={{ color: "#FFFFFF", fontSize: 14 }}>{title}</Text>
		</TouchableOpacity>
	);
};

const SurveySetting = ({ navigation }) => {
	const [selectedItems, setSelectedItems] = useState([]);

	const handleSelectItem = (item) => {
		setSelectedItems((prevItems) => {
			if (prevItems.includes(item)) {
				return prevItems;
			}
			return [...prevItems, item];
		});
	};

	const handleRemoveItem = (item) => {
		setSelectedItems((prevItems) => prevItems.filter((i) => i !== item));
	};

	const desel1 = () => {
		return (
			<View
				style={{
					height: 70,
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#FFFFFF",
					padding: 12,
				}}
			>
				<Button title="유제품" onPress={() => handleSelectItem("유제품")} />
				<Button title="밀가루" onPress={() => handleSelectItem("밀가루")} />
				<Button title="땅콩" onPress={() => handleSelectItem("땅콩")} />
				<Button title="견과류" onPress={() => handleSelectItem("견과류")} />
				<Button title="대두" onPress={() => handleSelectItem("대두")} />
				<Button title="과일" onPress={() => handleSelectItem("과일")} />
				
			</View>
		);
	};

	const desel2 = () => {
		return (
			<View
				style={{
					height: 70,
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					padding: 12,
				}}
			>
				<Button title="채소" onPress={() => handleSelectItem("채소")} />
				<Button title="복숭아" onPress={() => handleSelectItem("복숭아")} />
				<Button title="육류" onPress={() => handleSelectItem("육류")} />
				<Button title="해산물 및 어패류" onPress={() => handleSelectItem("해산물 및 어패류")} />
				<Button title="고수" onPress={() => handleSelectItem("고수")} />
			</View>
		);
	};

	const desel3 = () => {
		return (
			<View
				style={{
					height: 70,
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					padding: 12,
				}}
			>
				<Button title="민트" onPress={() => handleSelectItem("민트")} />
				<Button title="계란" onPress={() => handleSelectItem("계란")} />
				<Button title="오이" onPress={() => handleSelectItem("오이")} />
				<Button title="가지" onPress={() => handleSelectItem("가지")} />
				<Button title="브로콜리" onPress={() => handleSelectItem("브로콜리")} />
			</View>
		);
	};

	const checkboxpane = () => {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					padding: 12
				}}
			>
				{desel1()}
				{desel2()}
				{desel3()}
			</View>
		);
	}

	const selectedPane = () => {
		return (
			<View
				style={{
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "center",
					backgroundColor: "#E0E0E0",
					padding: 12,
					marginVertical: 10,
					borderRadius: 5
				}}
			>
				{selectedItems.map((item, index) => (
					<SelectedButton key={index} title={item} onRemove={() => handleRemoveItem(item)} />
				))}
			</View>
		);
	}

	const botbar = () => {
		return (
			<View
				style={{
					height: 40,
					backgroundColor: "#6750A4",
					padding: 12,
				}}
			/>
		);
	}

	return (
		<SafeAreaView
			style={{
				flex: 1,
				justifyContent: "space-between",
				backgroundColor: "#FFFFFF"
			}}
		>
			<View
				style={{
					height: 100,
					justifyContent: "center",
					backgroundColor: "#FFFFFF",
					padding: 12
				}}
			>
				<Text style={{ color: "#303233", fontSize: 20, textAlign: "center" }}>
					{"원하지 않는 재료들을 설정해 주세요!"}
				</Text>
			</View>
			

			{selectedPane()}
			{checkboxpane()}
			<View
				style={{
					height: 70,
					justifyContent: "center",
					alignItems: "center"
				}}
			>
				<Button title="먹지니 시작하기!" onPress={() => navigation.navigate("survey")} />
			</View>
			{botbar()}
		</SafeAreaView>
	);
}

export default SurveySetting;
