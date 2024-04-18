import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Image, } from "react-native";

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
					{props.name}
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

    const logoutButton = () => {
        return (
            <TouchableOpacity
				style = {{
					height: 50,
					justifyContent: "space-around",
					alignItems: "center",
					backgroundColor: "#DF1616",
					borderRadius: 90,
					padding: 12,
				}}>
				<Text
					style = {{
						color: "#FFFFFF",
						fontSize: 14,
						fontWeight: "bold",
					}}>
					{"logout"}
				</Text>
			</TouchableOpacity>

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
					{logoutButton()}
				</View>
			</View>
			{botbar()}
		</SafeAreaView>

    )
}
