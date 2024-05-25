import React,{useState} from "react";
import { SafeAreaView, View, Text, TouchableOpacity, } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Checkbox } from 'react-native-paper';
const Stack = createStackNavigator();

/* 	유저 설정 스크린의 역할:
	회원 가입 이후, 사용자의 취향에 따라 품목을 설정.
	라디오 버튼으로 설정할 예정. 
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
			padding: 12,
		}}
		onPress={onPress}
		>
		<Text style={{ color: "#FFFFFF", fontSize: 14 }}>{title}</Text>
		</TouchableOpacity>
	);
};

const UserSetting = ({navigation}) => {
	const desctext = () => {
        return (
            <Text style = {{color: "#303233", fontSize: 20, textAlign: "center"}}>
				{"알러지, 혹은 원하지 않는 재료를\n체크 해 주세요"}
			</Text>

        )
    }

    const descpane = () => {
        return (
            <View
				style = {{
					height: 170,
					justifyContent: "center",
					backgroundColor: "#FFFFFF",
					padding: 12,
				}}>
				{desctext()}
			</View>
        )
    }

	//알러지 품목들 
		const almilk = () => {
		const [checked, setChecked] = React.useState(false);
		return (
            <View
				style = {{height: 70, flexDirection: "row", justifyContent: "center", alignItems: "center" 				}}>
				<Text 
					style = {{color: "#303233", fontSize: 14}}>
					{"유제품"}
				</Text>
				<Checkbox status={checked ? 'checked' : 'unchecked'}
					onPress={() => {setChecked(!checked);}}
				/>
			</View>
		)
	}

	const alpeach = () => {
		const [checked, setChecked] = React.useState(false);
		return (
            <View
				style = {{height: 70, flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
				<Text 
					style = {{color: "#303233", fontSize: 14,}}>
					{"복숭아"}
				</Text>
				<Checkbox 
					status={checked ? 'checked' : 'unchecked'}
					onPress={() => {setChecked(!checked);}}
				/>
			</View>
		)
	}

	const alsea = () => {
		const [checked, setChecked] = React.useState(true);
		return (
            <View
				style = {{height: 70, flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
				<Text
					style = {{color: "#303233",fontSize: 14,}}>
					{"어패류"}
				</Text>
				<Checkbox
					status={checked ? 'checked' : 'unchecked'}
					onPress={() => {setChecked(!checked);}}
				/>
			</View>
		)
	}

	
	const alnut = () => {
		const [checked, setChecked] = React.useState(true);
		return (
            <View
				style = {{height: 70,flexDirection: "row",justifyContent: "center",alignItems: "center"}}>
				<Text
					style = {{color: "#303233",fontSize: 14,}}>
					{"땅콩"}
				</Text>
				<Checkbox
					status={checked ? 'checked' : 'unchecked'}
					onPress={() => {setChecked(!checked);}}
				/>
			</View>
		)
	}

    const allergic = () => {
		return (
            <View
				style = {{
					height: 70,
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#FFFFFF",
					padding: 12,
				}}>
				<Text
					style = {{
						color: "#303233",
						fontSize: 14,
					}}>
					{"알러지 : "}
				</Text>
				{almilk()}
				{alnut()}
				{alpeach()}
				{alsea()}
			</View>
        )
    }

	const cold = () => {
		const [checked, setChecked] = React.useState(true);
		return (
            <View
				style = {{height: 70,flexDirection: "row",justifyContent: "center",alignItems: "center"}}>
				<Text
					style = {{color: "#303233",fontSize: 14,}}>
					{"찬 음식"}
				</Text>
				<Checkbox
					status={checked ? 'checked' : 'unchecked'}
					onPress={() => {setChecked(!checked);}}
				/>
			</View>
		)
	}
	const hot = () => {
		const [checked, setChecked] = React.useState(true);
		return (
            <View
				style = {{height: 70,flexDirection: "row",justifyContent: "center",alignItems: "center"}}>
				<Text
					style = {{color: "#303233",fontSize: 14,}}>
					{"뜨거운 음식"}
				</Text>
				<Checkbox
					status={checked ? 'checked' : 'unchecked'}
					onPress={() => {setChecked(!checked);}}
				/>
			</View>
		)
	}
	
    const degree = () => {
        return (
            <View
				style = {{
					height: 70,
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#FFFFFF",
					padding: 12,
				}}>
				<Text
					style = {{
						color: "#303233",
						fontSize: 14,
					}}>
					{"온도 : "}
				</Text>
				{cold()}
				{hot()}
			</View>
        )
    }
	const mara = () => {
		const [checked, setChecked] = React.useState(true);
		return (
            <View
				style = {{height: 70,flexDirection: "row",justifyContent: "center",alignItems: "center"}}>
				<Text
					style = {{color: "#303233",fontSize: 14,}}>
					{"마라"}
				</Text>
				<Checkbox
					status={checked ? 'checked' : 'unchecked'}
					onPress={() => {setChecked(!checked);}}
				/>
			</View>
		)
	}
		const cori = () => {
		const [checked, setChecked] = React.useState(true);
		return (
            <View
				style = {{height: 70,flexDirection: "row",justifyContent: "center",alignItems: "center"}}>
				<Text
					style = {{color: "#303233",fontSize: 14,}}>
					{"고수"}
				</Text>
				<Checkbox
					status={checked ? 'checked' : 'unchecked'}
					onPress={() => {setChecked(!checked);}}
				/>
			</View>
		)
	}

    const spice = () => {
        return (
            <View
				style = {{
					height: 70,
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#FFFFFF",
					padding: 12,
				}}>
				<Text
					style = {{
						color: "#303233",
						fontSize: 14,
					}}>
					{"향신료 : "}
				</Text>
				{mara()}
				{cori()}
			</View>
        )
    }

	const tastesweet = () => {
		const [checked, setChecked] = React.useState(true);
		return (
            <View
				style = {{height: 70,flexDirection: "row",justifyContent: "center",alignItems: "center"}}>
				<Text
					style = {{color: "#303233",fontSize: 14,}}>
					{"단 맛"}
				</Text>
				<Checkbox
					status={checked ? 'checked' : 'unchecked'}
					onPress={() => {setChecked(!checked);}}
				/>
			</View>
		)
	}
	const tastehot = () => {
		const [checked, setChecked] = React.useState(true);
		return (
            <View
				style = {{height: 70,flexDirection: "row",justifyContent: "center",alignItems: "center"}}>
				<Text
					style = {{color: "#303233",fontSize: 14,}}>
					{"매운 맛"}
				</Text>
				<Checkbox
					status={checked ? 'checked' : 'unchecked'}
					onPress={() => {setChecked(!checked);}}
				/>
			</View>
		)
	}
	const tastebitter = () => {
		const [checked, setChecked] = React.useState(true);
		return (
            <View
				style = {{height: 70,flexDirection: "row",justifyContent: "center",alignItems: "center"}}>
				<Text
					style = {{color: "#303233",fontSize: 14,}}>
					{"쓴 맛"}
				</Text>
				<Checkbox
					status={checked ? 'checked' : 'unchecked'}
					onPress={() => {setChecked(!checked);}}
				/>
			</View>
		)
	}
	const tastesalty = () => {
		const [checked, setChecked] = React.useState(true);
		return (
            <View
				style = {{height: 70,flexDirection: "row",justifyContent: "center",alignItems: "center"}}>
				<Text
					style = {{color: "#303233",fontSize: 14,}}>
					{"짠 맛"}
				</Text>
				<Checkbox
					status={checked ? 'checked' : 'unchecked'}
					onPress={() => {setChecked(!checked);}}
				/>
			</View>
		)
	}
	const tastesour = () => {
		const [checked, setChecked] = React.useState(true);
		return (
            <View
				style = {{height: 70,flexDirection: "row",justifyContent: "center",alignItems: "center"}}>
				<Text
					style = {{color: "#303233",fontSize: 14,}}>
					{"신 맛"}
				</Text>
				<Checkbox
					status={checked ? 'checked' : 'unchecked'}
					onPress={() => {setChecked(!checked);}}
				/>
			</View>
		)
	}

	const taste = () => {
        return (
            <View
				style = {{
					height: 70,
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#FFFFFF",
					padding: 12,
				}}>
				<Text
					style = {{
						color: "#303233",
						fontSize: 14,
					}}>
					{"맛 : "}
				</Text>
				{tastehot()}
				{tastesweet()}
				{tastesour()}
				{tastebitter()}
				{tastesalty()}
			</View>
        )
    }

    const checkboxpane = () => {
        return (
            <View
				style = {{
					flex: 1,
					justifyContent: "center",
					padding: 12,
				}}>
				{allergic()}
				{degree()}
				{spice()}
				{taste()}
			</View>
        )
    }

    const clear_button = () => {
        return (
            <TouchableOpacity
				style = {{
					width: 150,
					height: 50,
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
					{"초기화"}
				</Text>
			</TouchableOpacity>
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

    return (
        <SafeAreaView
			style = {{
				flex: 1,
				justifyContent: "space-between",
				backgroundColor: "#FFFFFF",
			}}>
			{descpane()}
			{checkboxpane()}
			<View
				style = {{
					height: 70,
					flexDirection: "row",
					justifyContent: "space-around",
					alignItems: "center",
					backgroundColor: "#FFFFFF",
					padding: 12,
				}}>
				{clear_button()}
			</View>
			<View
				style = {{
					height: 70,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#FFFFFF",
					padding: 12,
				}}>
				<Button
						title ="설정 저장하기"
						onPress={() => navigation.navigate("muk")}
				/>
			</View>
			{botbar()}
		</SafeAreaView>
    )
}

export default UserSetting;