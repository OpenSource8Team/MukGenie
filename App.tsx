import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { enableScreens } from 'react-native-screens';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Importing screens
import MainScreen from "./layout/main_screen";
import LoginScreen from "./layout/login_screen";
import SignupScreen from "./layout/signup_screen";
import UserScreen from "./layout/user_infomation";
import SurveySetting from "./layout/survey_setting";
import SurveyResult from "./layout/survey_result";
import SurveyScreen from "./layout/survey_screen";
import UserSetting from "./layout/user_setting";
import SignTestScreen from "./layout/signtest_screen";
import LogScreen from "./layout/survey_logs";
enableScreens();
const Stack = createStackNavigator();

const App = () => {
  const [initialRoute, setInitialRoute] = useState("login");

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const userToken = await AsyncStorage.getItem('userToken');
        // 유저 토큰이 있는지 확인
        if (userToken) {
          // 토큰이 있다면 initialRoute 값을 muk으로 설정
          setInitialRoute("muk");
        } else {
          // 토큰이 존재하지 않는다면 initialRoute 값을 login으로 설정
          setInitialRoute("login");
        }
      } catch (error) {
        console.error(error);
        //그 외의 오류가 있을 경우도 initialRoute 값을 login으로 설정
        setInitialRoute("login");
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{
          headerStyle: {
          backgroundColor: '#3ED4BE', // 바탕색을 원하는 색상으로 변경합니다.
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} // 스택으로 올릴 화면들
      >
        {/*스택 분리시, 호출이 일어나지 않아 스택 초기화 방식으로 구현 */}
        <Stack.Screen name="muk" component={MainScreen} />
        <Stack.Screen name="surveysetting" component={SurveySetting} />
        <Stack.Screen name="survey" component={SurveyScreen} />
        <Stack.Screen name="result" component={SurveyResult} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={SignupScreen} />
        <Stack.Screen name="user" component={UserScreen} />
        <Stack.Screen name="usersetting" component={UserSetting} />
        <Stack.Screen name="signtest" component={SignTestScreen} />
        <Stack.Screen name="log" component={LogScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;