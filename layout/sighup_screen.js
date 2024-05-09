import React from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, } from "react-native";
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
		  width: 150,
		  height: 50,
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

const SignupScreen = ({navigation}) => {// 스크린
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

    const pwbox = () => {//유저가 비밀번호를 입력할 텍스트 박스.
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

    const namebox = () => {//유저가 이름을 입력할 텍스트 박스.
        return (
            <TextInput
				placeholder="Name"
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

    const buttonpane = () => {//버튼을 놓을 판. check for duplicate 버튼을 눌러 중복된 값이 있는지 점검. Sighup 버튼을 누르면, 박스에 입력한 값을 데이터베이스에 입력할것.
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
						title ="Check for duplicates"
					/>
				<Button
						title ="Sighup"
						onPress={() => navigation.navigate("login")}
				/>
			</View>

        )
    }

    const infopane = () => {//아이디 박스, 패스워드 박스, 이름 박스, 버튼 판을 정렬하는 컴포넌트.
        return (
            <View
				style = {{
					height: 220,
					justifyContent: "space-between",
					alignItems: "center",
					backgroundColor: "#FFFFFF",
					padding: 12,
				}}>
				{idbox()}
				{pwbox()}
				{namebox()}
				{buttonpane()}
			</View>

        )
    }

    const botbar = () => {// 바텀바, 큰 특징 없음, 디자인용.
        return (
            <View
				style = {{
					height: 70,
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
			{infopane()}
			{botbar()}
		</SafeAreaView>

    )
}

export default SignupScreen;