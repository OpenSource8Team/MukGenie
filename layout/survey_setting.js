import React,{useState} from "react";
import { SafeAreaView, View, Text, TouchableOpacity, } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Checkbox } from 'react-native-paper';
const Stack = createStackNavigator();

/* 	설문 설정 스크린의 역할:
	설문을 시작하기 전, 사용자의 취향에 따라 품목을 설정.
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

const SurveySetting = ({navigation}) => {
	const desctext = () => {
        return (
            <Text style = {{color: "#303233", fontSize: 20, textAlign: "center"}}>
				{"먹지니를 시작 하기 전에,\n빠른 결과도출을 위해 설정해 주세요!"}
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

	//kostl 부터 westl 까지 한식~양식 체크박스.
	const kostl = () => {
		const [checked, setChecked] = React.useState(false);
		return (
            <View
				style = {{height: 70, flexDirection: "row", justifyContent: "center", alignItems: "center" 				}}>
				<Text 
					style = {{color: "#303233", fontSize: 14}}>
					{"한식"}
				</Text>
				<Checkbox status={checked ? 'checked' : 'unchecked'}
      				onPress={() => {setChecked(!checked);}}
    			/>
			</View>
		)
	}

	const cnstl = () => {
		const [checked, setChecked] = React.useState(false);
		return (
            <View
				style = {{height: 70, flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
				<Text 
					style = {{color: "#303233", fontSize: 14,}}>
					{"중식"}
				</Text>
				<Checkbox 
					status={checked ? 'checked' : 'unchecked'}
      				onPress={() => {setChecked(!checked);}}
    			/>
			</View>
		)
	}

	const jpstl = () => {
		const [checked, setChecked] = React.useState(true);
		return (
            <View
				style = {{height: 70, flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
				<Text
					style = {{color: "#303233",fontSize: 14,}}>
					{"일식"}
				</Text>
				<Checkbox
      				status={checked ? 'checked' : 'unchecked'}
      				onPress={() => {setChecked(!checked);}}
    			/>
			</View>
		)
	}

	
	const westl = () => {
		const [checked, setChecked] = React.useState(true);
		return (
            <View
				style = {{height: 70,flexDirection: "row",justifyContent: "center",alignItems: "center"}}>
				<Text
					style = {{color: "#303233",fontSize: 14,}}>
					{"양식"}
				</Text>
				<Checkbox
      				status={checked ? 'checked' : 'unchecked'}
      				onPress={() => {setChecked(!checked);}}
    			/>
			</View>
		)
	}

    const country = () => {
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
					{"국가 분류: "}
				</Text>
				{kostl()}
				{cnstl()}
				{jpstl()}
				{westl()}
			</View>
        )
    }

	const foodrice = () => {
		const [checked, setChecked] = React.useState(true);
		return (
            <View
				style = {{height: 70,flexDirection: "row",justifyContent: "center",alignItems: "center"}}>
				<Text
					style = {{color: "#303233",fontSize: 14,}}>
					{"밥"}
				</Text>
				<Checkbox
      				status={checked ? 'checked' : 'unchecked'}
      				onPress={() => {setChecked(!checked);}}
    			/>
			</View>
		)
	}
	const foodsoup = () => {
		const [checked, setChecked] = React.useState(true);
		return (
            <View
				style = {{height: 70,flexDirection: "row",justifyContent: "center",alignItems: "center"}}>
				<Text
					style = {{color: "#303233",fontSize: 14,}}>
					{"죽"}
				</Text>
				<Checkbox
      				status={checked ? 'checked' : 'unchecked'}
      				onPress={() => {setChecked(!checked);}}
    			/>
			</View>
		)
	}
	const foodnoodle = () => {
		const [checked, setChecked] = React.useState(true);
		return (
            <View
				style = {{height: 70,flexDirection: "row",justifyContent: "center",alignItems: "center"}}>
				<Text
					style = {{color: "#303233",fontSize: 14,}}>
					{"면"}
				</Text>
				<Checkbox
      				status={checked ? 'checked' : 'unchecked'}
      				onPress={() => {setChecked(!checked);}}
    			/>
			</View>
		)
	}
	const foodbread = () => {
		const [checked, setChecked] = React.useState(true);
		return (
            <View
				style = {{height: 70,flexDirection: "row",justifyContent: "center",alignItems: "center"}}>
				<Text
					style = {{color: "#303233",fontSize: 14,}}>
					{"빵"}
				</Text>
				<Checkbox
      				status={checked ? 'checked' : 'unchecked'}
      				onPress={() => {setChecked(!checked);}}
    			/>
			</View>
		)
	}

    const foodtype = () => {
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
					{"음식 종류: "}
				</Text>
				{foodrice()}
				{foodsoup()}
				{foodnoodle()}
				{foodbread()}
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
				{country()}
				{foodtype()}
			</View>

        )
    }

    const all_button = () => {
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
					{"뭐든 좋아요!"}
				</Text>
			</TouchableOpacity>

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
				{all_button()}
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
						title ="먹지니 시작하기!"
						onPress={() => navigation.navigate("survey")}
				/>
			</View>
			{botbar()}
		</SafeAreaView>

    )
}

export default SurveySetting;