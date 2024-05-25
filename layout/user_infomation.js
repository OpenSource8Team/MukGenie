import React from "react";
import { SafeAreaView, View, Text,TouchableOpacity, } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

/* 	회원가입 스크린의 역할:
	회원가입 버튼이 눌리면, 텍스트 박스에 담긴 텍스트와 데이터베이스의 값을 대조.
	일치하는 내용이 없다면 회원가입 성공, 일치하는 내용이 있다면 오류메시지 출력.
*/

const Button = ({ title, onPress }) => {// 버튼을 누르면 확인이 가능하게 끔 색을 바꿈
	return (
		<TouchableOpacity
		style={{
			width: 100,
			height: 40,
			justifyContent: "center",
			alignItems: "center",
			backgroundColor: "#6750A4",
			borderRadius: 90,
			padding: 5,
		}}
		onPress={onPress}
		>
		<Text style={{ color: "#FFFFFF", fontSize: 14 }}>{title}</Text>
		</TouchableOpacity>
	);
};

const InfoScreen = ({navigation}) => {// 스크린
	const username = () => {//유저의 이름을 출력할 컴포넌트
		const namevalue = '유저의 이름값';// db값, 혹은 연결된 계정의 이름값

		return (
			<Text 
				style={{
					fontSize : 20
			}}
			> 이름 : {namevalue}</Text>
		);
	};

	
	const userid = () => {
        const idvalue = '유저의 아이디값';//  db값, 혹은 연결된 계정의 아이디 값
		return (
			<Text 
				style={{
					fontSize : 20
			}}
			> 아이디 : {idvalue}</Text>
		);
	};

	const userpw = () => {
        const pwvalue = '유저의 비밀번호값';// db값, 혹은 연결된 계정의 비밀번호 값
		return (
			<Text 
				style={{
					fontSize : 20
			}}
			> 비밀번호 : {pwvalue}</Text>
		);
	};

    const buttonpane = () => {//버튼을 놓을 판.
        return (
            <View
				style = {{
					alignSelf: "stretch",
					flexDirection: "row",
					justifyContent: "space-around",
					alignItems: "center",
					backgroundColor: "#FFFFFF",
					padding: 12,
				}}>
				<Button
						title ="로그아웃"
						onPress={() => navigation.navigate("login")}
				/>
				<Button
						title ="설정 변경"
						onPress={() => navigation.navigate("usersetting")}
				/>
			</View>
        )
    }

    const infopane = () => {//아이디 박스, 패스워드 박스, 이름 박스, 버튼 판을 정렬하는 컴포넌트.
        return (
            <View
				style = {{
					height: 220,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#FFFFFF",
					padding: 12,
				}}>
				{username()}
				{userid()}
				{userpw()}
				{buttonpane()}
			</View>
        )
    }

	const blank = () => {// 빈공간, 큰 특징 없음, 디자인용.
        return (
            <View
				style = {{
					height: 40,
					padding: 12,
				}}>
			</View>
        )
    }
    const botbar = () => {// 바텀바, 큰 특징 없음, 디자인용.
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

    return (//컴포넌트 배치
        <SafeAreaView
			style = {{
				flex: 1,
				justifyContent: "space-between",
				backgroundColor: "#FFFFFF",
			}}>
			{blank()}
			{infopane()}
			{botbar()}
		</SafeAreaView>
    )
}

export default InfoScreen;