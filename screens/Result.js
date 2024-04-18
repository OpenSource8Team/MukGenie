import React from "react";
import { SafeAreaView, View, Text, ScrollView, Image, } from "react-native";

export default (props) => {


    const muk = () => {
        return (
            <Text
				style = {{
					color: "#FFFFFF",
					fontSize: 20,
				}}>
				{"muk"}
			</Text>

        )
    }

    const topbar = () => {
        return (
            <View
				style = {{
					height: 70,
					justifyContent: "center",
					backgroundColor: "#6750A4",
					padding: 12,
				}}>
				{muk()}
			</View>

        )
    }

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
			{topbar()}
			{resultpane()}
			{botbar()}
		</SafeAreaView>

    )
}
