import React from "react";
import { SafeAreaView, View, Text, FlatList, } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

/* 	로그 스크린의 역할:
	사용자의 설문 결과 값을 저장할 예정.
	내용은 일자/설문 결과값?
*/

const LogsScreen = ({navigation}) => {
	const list_desc = () => {
        return (
            <Text
				style = {{
					color: "#FFFFFF",
					fontSize: 14,
				}}>
				{"list_desc"}
			</Text>

        )
    }

    const list_example = ({item, index}) => {
        return (
            <View
				style = {{
					height: 50,
					flexDirection: "row",
					backgroundColor: "#5E27FD",
					borderRadius: 12,
					padding: 12,
				}}>
				{list_desc()}
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
			<FlatList
				data={Array(1)?.fill(0)}
				renderItem={list_example}
				keyExtractor={(item ,index)=>index + ""}
				style = {{
					flex: 1,
					backgroundColor: "#FFFFFF",
					padding: 12,
				}}
			/>
			{botbar()}
		</SafeAreaView>
	)
}

export default LogsScreen;