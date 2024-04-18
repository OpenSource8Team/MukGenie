import React from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, } from "react-native";

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

    const idbox = () => {
        return (
            <TextInput
				value={props.ID}
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
				value={props.PW}
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

    const loginbutton = () => {
        return (
            <TouchableOpacity
				style = {{
					width: 100,
					height: 40,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#6750A4",
					borderRadius: 90,
					padding: 12,
				}}>
				<Text
					style = {{
						color: "#FFFFFF",
						fontSize: 14,
					}}>
					{"login"}
				</Text>
			</TouchableOpacity>

        )
    }

    const sighinbutton = () => {
        return (
            <TouchableOpacity
				style = {{
					width: 100,
					height: 40,
					alignItems: "center",
					backgroundColor: "#6750A4",
					borderRadius: 90,
					padding: 12,
				}}>
				<Text
					style = {{
						color: "#FFFFFF",
						fontSize: 14,
					}}>
					{"sigh in"}
				</Text>
			</TouchableOpacity>

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
				{loginbutton()}
				{sighinbutton()}
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
			{topbar()}
			{loginpane()}
			{botbar()}
		</SafeAreaView>

    )
}
