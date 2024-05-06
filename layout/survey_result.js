import React from "react";
import { SafeAreaView, View, Text, ScrollView, Image, } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

/* 	설문 결과 스크린의 역할:
	설문이 끝나면 데이터베이스로 정리된 내용으로 결과값을 출력하는 화면.
	유튜브 api및 지도 api로 관련 음식점 혹은 영상 띄울것.
*/

const ResultScreen = ({navigation}) =>{
	const foodName = () => {
        return (
            <Text
				style = {{
					color: "#303233",
					fontSize: 20,
				}}>
				{"음식 이름"}
			</Text>

        )
    }

    const foodDesc = () => {
        return (
            <Text
				style = {{
					color: "#303233",
					fontSize: 14,
				}}>
				{"음식 설정"}
			</Text>

        )
    }

    const foodpane = () => {
        return (
            <View
				style = {{
					width: 390,
					height: 400,
					justifyContent: "space-around",
					alignItems: "center",
					backgroundColor: "#FFFFFF",
					padding: 12,
				}}>
				{foodName()}
				<Image
					source = {{uri:"https://i.imgur.com/1tMFzp8.png"}}
					resizeMode = {"stretch"}
					style = {{
						width: 300,
						height: 300,
					}}
				/>
				{foodDesc()}
			</View>

        )
    }

    const resultpane = () => {
        return (
            <ScrollView
				style = {{
					flex: 1,
					backgroundColor: "#FFFFFF",
				}}>
				{foodpane()}
			</ScrollView>

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
			{resultpane()}
			{botbar()}
		</SafeAreaView>

    )
}


export default ResultScreen;
    