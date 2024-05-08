import React from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

/* 	로그인 스크린의 역할:
	로그인 버튼이 눌리면, 텍스트 박스에 담긴 텍스트와 데이터베이스의 값을 대조.
	일치하는 내용이 있다면 로그인 성공, 일치하는 내용이 없다면 오류메시지 출력.
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
		  padding: 12,
		}}
		onPress={onPress}
	  >
		<Text style={{ color: "#FFFFFF", fontSize: 14 }}>{title}</Text>
	  </TouchableOpacity>
	);
  };

const LoginScreen = ({navigation}) => {
	const idbox = () => {
        return (
            <TextInput
				placeholder="ID"
				value={Text}
				style = {{
					color: "#303033",
					fontSize: 14,
					width: 200,
					height: 40,
					backgroundColor: "#FFFFFF",
					borderColor: "#C896FF",
					borderRadius: 12,
					borderWidth: 2,
					padding: 12,
				}}
			/>
			
        )
    }

	const pwbox = () => {
        return (
            <TextInput
				placeholder="Password"
				value={Text}
				style = {{
					color: "#303033",
					fontSize: 14,
					width: 200,
					height: 40,
					backgroundColor: "#FFFFFF",
					borderColor: "#C896FF",
					borderRadius: 12,
					borderWidth: 2,
					padding: 12,
				}}
			/>
			
        )
    }

	const buttonpane = () => {
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
						title ="login"
						onPress={() => navigation.navigate("muk")}
					/>

					<Button
						title ="sighup"
						onPress={() => navigation.navigate("sighup")}
					/>
			</View>
			
        )
    }

    const loginpane = () => {
        return (
            <View 
				style = {{
					height: 180,
					justifyContent: "space-between",
					alignItems: "center",
					backgroundColor: "#FFFFFF",
					padding: 12,
				}}>
				{idbox()}
				{pwbox()}
				{buttonpane()}
			</View>
			
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
			{loginpane()}
			{botbar()}
		</SafeAreaView>
		
    )
}

export default LoginScreen;