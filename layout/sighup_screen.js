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

const SignupScreen = ({navigation}) => {// 스크린
	const idbox = () => {
        return (
            <TextInput
				placeholder="아이디"
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
	
	const checkbutton = () => {
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
						title ="중복 확인"
					/>
				
			</View>

        )
    }

		
	

	const idpane = () => {
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
				{idbox()}
				{checkbutton()}
			</View>

        )
    }

    const pwbox = (pw) => {//유저가 비밀번호를 입력할 텍스트 박스.
        return (
            <TextInput
				placeholder="비밀번호"
				value={Text}			
				secureTextEntry={true}
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
	const pwrcbox = (pwrc) => {//PassWord Re Checking
        return (
            <TextInput
				placeholder="비밀번호 확인"
				value={Text}			
				secureTextEntry={true}
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

	const pwcheck = () => {
		let pwrcresult
		if(pwrcbox.value == null || pwbox.value == null) pwrcresult = '비밀번호를 입력하십시오.'

		else if (pwrcbox.value === pwbox.value) pwrcresult = '비밀번호가 같습니다!';
						
		else pwrcresult = '비밀번호 체크가 완료되지 않았습니다.';

		return (
            <View
				style = {{
					}}>
					<Text>
						{pwrcresult}	
					</Text>
				</View>
		);
	};

	const pwpane = () => {
        return (
            <View
				style = {{
					alignSelf: "stretch",
					flexDirection: "col",
					justifyContent: "space-around",
					alignItems: "center",
					backgroundColor: "#FFFFFF",
					padding: 12,
				}}>
				{pwbox()}
				{pwrcbox()}
				{pwcheck()}
			</View>

        )
    }

    const namebox = () => {//유저가 이름을 입력할 텍스트 박스.
        return (
            <TextInput
				placeholder="이름"
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
						title ="회원가입"
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
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#FFFFFF",
					padding: 12,
				}}>
				{idpane()}
				{pwpane()}
				{namebox()}
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

export default SignupScreen;