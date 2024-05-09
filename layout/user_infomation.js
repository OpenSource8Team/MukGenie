import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Image, } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

/* 	유저 스크린의 역할:
	로그인이 되어있을때만 표시 및 작동될 예정.
	로그아웃 역시 이곳에서 사용될 예정.
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

const UserScreen = ({navigation}) => {
	const namePane = () => {
        return (
            <View
				style = {{
					width: 250,
					height: 70,
					justifyContent: "space-around",
					backgroundColor: "#FFFFFF",
					padding: 12,
				}}>
				<Text
					style = {{
						color: "#303233",
						fontSize: 20,
					}}>
					{"Text"}
				</Text>
			</View>

        )
    }

    const infopane = () => {
        return (
            <View
				style = {{
					backgroundColor: "#FFFFFF",
				}}>
				{infopane()}
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
			<View
				style = {{
					flex: 1,
					justifyContent: "space-between",
					backgroundColor: "#FFFFFF",
					padding: 12,
				}}>
				{infopane()}
				<View
					style = {{
						height: 134,
						justifyContent: "space-between",
						backgroundColor: "#FFFFFF",
						padding: 12,
					}}>
					<TouchableOpacity
						style = {{
							height: 50,
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: "#F7F7F7",
							borderRadius: 90,
							padding: 12,
						}}>
						<Text
							style = {{
								color: "#303233",
								fontSize: 14,
							}}>
							{"back"}
						</Text>
					</TouchableOpacity>
					<Button
						title = "logout"
						onPress={() => navigation.navigate("muk")}
					/>
				</View>
			</View>
			{botbar()}
		</SafeAreaView>

    )
}

export default UserScreen;