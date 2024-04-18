import React from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const HomeScreen = ({ navigation }) => {
    const muk = () => {
        return (
            <Text style={{ color: "#FFFFFF", fontSize: 20 }}>
                {"muk"}
            </Text>
        )
    }

    const topbar = () => {
        return (
            <View style={{ height: 70, justifyContent: "space-around", backgroundColor: "#6750A4", padding: 12 }}>
                {muk()}
            </View>
        )
    }

    const buttonpane = () => {
        return (
            <View style={{ height: 70, alignSelf: "stretch", flexDirection: "row", justifyContent: "space-around", backgroundColor: "#FFFFFF", padding: 12 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('UserScreen')}
                    style={{
                        width: 100,
                        height: 40,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#6750A4",
                        borderRadius: 90,
                        padding: 12,
                    }}>
                    <Text
                        style={{
                            color: "#FFFFFF",
                            fontSize: 14,
                        }}>
                        {"User"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('StartScreen')}
                    style={{
                        width: 100,
                        height: 40,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#6750A4",
                        borderRadius: 90,
                        padding: 12,
                    }}>
                    <Text
                        style={{
                            color: "#FFFFFF",
                            fontSize: 14,
                        }}>
                        {"Start"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('LogScreen')}
                    style={{
                        width: 100,
                        height: 40,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#6750A4",
                        borderRadius: 90,
                        padding: 12,
                    }}>
                    <Text
                        style={{
                            color: "#FFFFFF",
                            fontSize: 14,
                        }}>
                        {"Log"}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    const mainpane = () => {
        return (
            <View style={{ flex: 1, justifyContent: "space-around", alignItems: "center", backgroundColor: "#FFFFFF", padding: 12 }}>
                <Image
                    source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                    resizeMode={"stretch"}
                    style={{ width: 300, height: 300 }}
                />
                {buttonpane()}
            </View>
        )
    }

    const botbar = () => {
        return (
            <View style={{ height: 40, backgroundColor: "#6750A4", padding: 12 }}>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "space-between", backgroundColor: "#FFFFFF" }}>
            {topbar()}
            {mainpane()}
            {botbar()}
        </SafeAreaView>
    )
}

const UserScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>User Screen</Text>
        </SafeAreaView>
    )
}

const StartScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Start Screen</Text>
        </SafeAreaView>
    )
}

const LogScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Log Screen</Text>
        </SafeAreaView>
    )
}

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="UserScreen" component={UserScreen} />
                <Stack.Screen name="StartScreen" component={StartScreen} />
                <Stack.Screen name="LogScreen" component={LogScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
