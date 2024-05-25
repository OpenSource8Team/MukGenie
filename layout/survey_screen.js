import React from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity, } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

/* 	설문 스크린의 역할:
	사용자에게 질문을 하고, 사용자는 질문에 대해 버튼 4개로 대답을 함.
	아키네이터 api 운용할 예정.
*/
const Button = ({ title, onPress }) => {// 버튼을 누르면 확인이 가능하게 끔 색을 바꿈
	return (
		<TouchableOpacity
		style = {{
			width: 170,
			height: 70,
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

const SurveyScreen = ({navigation}) => {//설문 화면.
	const numbers = () => {//질문 넘버. 질문이 지날때마다 숫자가 올라가야 함
        return (
            <Text
				style = {{
					color: "#303233",
					fontSize: 20,
					fontWeight: "bold",
				}}>
				{"질문 1"}
			</Text>
        )
    }

    const question = () => {//질문의 내용을 출력하는 칸
        return (
            <Text
				style = {{
					color: "#303233",
					fontSize: 14,
				}}>
				{"질문을 출력합니다."}
			</Text>
        )
    }

    const image = () => {// 이미지를 출력하는 칸.(만약 이미지가 필요하거나 만들어질 경우.)
        return (
            <View
				style = {{
					flex: 1,
					justifyContent: "space-between",
					alignItems: "center",
					backgroundColor: "#FFFFFF",
					padding: 50,
				}}>
				{numbers()}
				{question()}
				<View
					style = {{
						height: 350,
						alignSelf: "stretch",
						justifyContent: "center",
						backgroundColor: "#FFFFFF",
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}}
						resizeMode = {"stretch"}
						style = {{
							flex: 1,
						}}
					/>
				</View>
			</View>
        )
    }

    const botbar = () => {// 바텀바, 큰 특징 없음, 디자인용.
        return (
            <View
				style = {{
					height: 40,
					backgroundColor: "#6750A4",
				}}>
			</View>
        )
    }

    return (
        <SafeAreaView //컴포넌트 배치도 버튼 배치도 여기 들어있음.
			style = {{
				flex: 1,
				justifyContent: "space-between",
				backgroundColor: "#FFFFFF",
			}}>
			{image()}
			<View
				style = {{
					height: 200,
					justifyContent: "center",
					backgroundColor: "#FFFFFF",
					paddingHorizontal: 12,
				}}>
				<View
					style = {{
						height: 100,
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<Button
						title="답변 1"
					/>
					<Button
						title="답변 2"
					/>
				</View>
				<View
					
					style = {{
						height: 100,
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						backgroundColor: "#FFFFFF",
					}}>
					<Button
						title="답변 3"
					/>
					<Button 
						title="결과 화면으로(테스트)"
						onPress={() => navigation.navigate("result")}
					/>
										
				</View>
			</View>
			{botbar()}
		</SafeAreaView>
    )
}

export default SurveyScreen;