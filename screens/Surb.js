import React from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity, } from "react-native";

export default (props) => {


    const topbar = () => {
        return (
            <View
				style = {{
					height: 70,
					justifyContent: "center",
					backgroundColor: "#6750A4",
					padding: 12,
				}}>
				<Text
					style = {{
						color: "#FFFFFF",
						fontSize: 20,
					}}>
					{"muk"}
				</Text>
			</View>

        )
    }

    const numbers = () => {
        return (
            <Text
				style = {{
					color: "#303233",
					fontSize: 20,
					fontWeight: "bold",
				}}>
				{"Text"}
			</Text>

        )
    }

    const question = () => {
        return (
            <Text
				style = {{
					color: "#303233",
					fontSize: 14,
				}}>
				{"Text"}
			</Text>

        )
    }

    const image = () => {
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

    const bottombar = () => {
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
        <SafeAreaView
			style = {{
				flex: 1,
				justifyContent: "space-between",
				backgroundColor: "#FFFFFF",
			}}>
			{topbar()}
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
					<TouchableOpacity
						style = {{
							width: 170,
							height: 70,
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
							{"Text"}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style = {{
							width: 170,
							height: 70,
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
							{"Text"}
						</Text>
					</TouchableOpacity>
				</View>
				<View
					style = {{
						height: 100,
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						backgroundColor: "#FFFFFF",
					}}>
					<TouchableOpacity
						style = {{
							width: 170,
							height: 70,
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
							{"Text"}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style = {{
							width: 170,
							height: 70,
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
							{"Text"}
						</Text>
					</TouchableOpacity>
				</View>
			</View>
			{bottombar()}
		</SafeAreaView>

    )
}
