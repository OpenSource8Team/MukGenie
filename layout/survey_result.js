import React from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity, Linking} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

/* 	설문 결과 스크린의 역할:
	설문이 끝나면 데이터베이스로 정리된 내용으로 결과값을 출력하는 화면.
	유튜브 api및 지도 api로 관련 음식점 혹은 영상 띄울것.
*/
const Button = ({ title, onPress }) => {// 버튼을 누르면 확인이 가능하게 끔 색을 바꿈
return (
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
};

const ResultScreen = ({navigation}) =>{//결과값 출력 페이지.
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
				{"음식 설명"}
			</Text>
        )
    }

    const foodpane = () => {//음식이름-이미지-설명 순으로 배치.
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

    const ytbutton = () => { //YouTube 버튼, 이후 링크에 결과값을 추가해 서치용도로 변경가능
        return (
			<View
				style={{
					width: 300,
					height: 40,
					justifyContent: "center",
					alignSelf: "center",
					backgroundColor: "#CD201F",
					borderRadius: 90,
					padding: 10,	  
				}}>	
				<Button
					title ="유튜브로 검색하기!"
					onPress={() => Linking.openURL(`https://www.youtube.com`)}
				/>
			</View>
        )
    }

	const nmbutton = () => {//Naver Map 버튼, 이후 링크에 결과값을 추가해 서치용도로 변경가능
        return (
			<View
				style={{
					width: 300,
					height: 40,
					justifyContent: "center",
					alignSelf: "center",
					backgroundColor: "#00C300",
					borderRadius: 90,
					padding: 10,
				}}>
				<Button
					title ="네이버 맵으로 주변 음식점 검색하기!"
					onPress={() => Linking.openURL(`https://map.naver.com`)}
				/>
			</View>		
        )
    }

	const bmbutton = () => {//Back to Main 버튼
        return (
			<View
				style={{
					width: 300,
					height: 40,
					justifyContent: "center",
					alignSelf: "center",
					backgroundColor: "#6750A4",
					borderRadius: 90,
					padding: 10,	  
				}}>	
				<Button
					title ="메인으로 돌아가기!"
					onPress={() => navigation.navigate("muk")}
				/>
				
			</View>		
        )
    }

    const botbar = () => {// 바텀바, 큰 특징 없음, 디자인용.
        return (
            <View
				style = {{
					height: 40,
					alignItems: "stretch",
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
			{foodpane()}
			{ytbutton()}
			{nmbutton()}
			{bmbutton()}
			{botbar()}
		</SafeAreaView>

    )
}

export default ResultScreen;
    