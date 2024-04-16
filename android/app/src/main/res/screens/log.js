import React from "react";
import { SafeAreaView, View, Text, FlatList, } from "react-native";

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
			{topbar()}
			<FlatList 
				data={Array(1)?.fill(0)}
				renderItem={list_example}
				keyExtractor={(item,index)=>index + ""}
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
