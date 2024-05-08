import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity, } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

/* 	설문 설정 스크린의 역할:
	설문을 시작하기 전, 사용자의 취향에 따라 품목을 설정.
	라디오 버튼으로 설정할 예정. 
*/

const SurveySetting = ({navigation}) => {
	const desctext = () => {
        return (
            <Text style = {{color: "#303233", fontSize: 20, textAlign: "center"}}>
				{"먹지니를 시작 하기 전에,\n빠른 결과도출을 위해 설정해 주세요!"}
			</Text>

        )
    }

    const descpane = () => {
        return (
            <View
				style = {{
					height: 170,
					justifyContent: "center",
					backgroundColor: "#FFFFFF",
					padding: 12,
				}}>
				{desctext()}
			</View>

        )
    }

    const country = () => {
        return (
            <View
				style = {{
					height: 70,
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#FFFFFF",
					padding: 12,
				}}>
				<Text
					style = {{
						color: "#303233",
						fontSize: 14,
					}}>
					{"국가 분류"}
				</Text>
			</View>

        )
    }

    const type = () => {
        return (
            <View
				style = {{
					height: 70,
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#FFFFFF",
					padding: 12,
				}}>
				<Text
					style = {{
						color: "#303233",
						fontSize: 14,
					}}>
					{"음식 종류"}
				</Text>
			</View>

        )
    }

    const checkboxpane = () => {
        return (
            <View
				style = {{
					flex: 1,
					justifyContent: "center",
					backgroundColor: "#FFFFFF",
					padding: 12,
				}}>
				{country()}
				{type()}
			</View>

        )
    }

    const all_button = () => {
        return (
            <TouchableOpacity
				style = {{
					width: 150,
					height: 50,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#6750A4",
					borderRadius: 90,
					padding: 12,
				}}>
				<Text
					style = {{
						color: "#FFFFFF",
						fontSize: 14,
					}}>
					{"뭐든 좋아요!"}
				</Text>
			</TouchableOpacity>

        )
    }

    const clear_button = () => {
        return (
            <TouchableOpacity
				style = {{
					width: 150,
					height: 50,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#6750A4",
					borderRadius: 90,
					padding: 12,
				}}>
				<Text
					style = {{
						color: "#FFFFFF",
						fontSize: 14,
					}}>
					{"초기화"}
				</Text>
			</TouchableOpacity>

        )
    }

    const start_button = () => {
        return (
            <TouchableOpacity
				style = {{
					width: 200,
					height: 50,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#6750A4",
					borderRadius: 90,
					padding: 12,
				}}>
				<Text
					style = {{
						color: "#FFFFFF",
						fontSize: 14,
					}}>
					{"먹지니 시작하기!"}
				</Text>
			</TouchableOpacity>

        )
    }

    const botbar = () => {
        return (
            <View
				style = {{
					height: 40,
					backgroundColor: "#6750A4",
					padding: 12,
				}}>
			</View>

        )
    }

    return (
        <SafeAreaView
			style = {{
				flex: 1,
				justifyContent: "space-between",
				backgroundColor: "#FFFFFF",
			}}>
			{descpane()}
			{checkboxpane()}
			<View
				style = {{
					height: 70,
					flexDirection: "row",
					justifyContent: "space-around",
					alignItems: "center",
					backgroundColor: "#FFFFFF",
					padding: 12,
				}}>
				{all_button()}
				{clear_button()}
			</View>
			<View
				style = {{
					height: 70,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#FFFFFF",
					padding: 12,
				}}>
				{start_button()}
			</View>
			{botbar()}
		</SafeAreaView>

    )
}

export default SurveySetting;