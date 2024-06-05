<<<<<<< Updated upstream
import React from "react";
//모듈 임포트
import { NavigationContainer } from "@react-navigation/native"; //네비게이션 모듈. 각 화면을 이동하는데에 사용됨
import { createStackNavigator } from "@react-navigation/stack"; //네비게이션 스택 모듈. 이전 화면으로 이동하는
import { enableScreens } from 'react-native-screens';//화면 출력에 필요한 모듈.

//화면들을 임포트 시킴
import { default as mainscreen } from "./layout/main_screen";
import { default as loginscreen } from "./layout/login_screen";
import { default as signupscreen } from "./layout/signup_screen";
import { default as userscreen } from "./layout/user_infomation";
import { default as surveysetting } from "./layout/survey_setting";
import { default as surveyresult } from "./layout/survey_result";
import { default as surveyscreen } from "./layout/survey_screen";
import { default as usersetting } from "./layout/user_setting";
import { default as signtestscreen } from "./layout/signtest_screen";
=======
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
>>>>>>> Stashed changes

enableScreens();
const Stack = createStackNavigator();

<<<<<<< Updated upstream
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName = "MUK"
=======
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
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        <Stack.Screen name="muk" component={mainscreen} />
        <Stack.Screen name="surveysetting" component={surveysetting} />
        <Stack.Screen name="survey" component={surveyscreen}/>
        <Stack.Screen name="result" component={surveyresult}/>
        <Stack.Screen name="login" component={loginscreen}/>
        <Stack.Screen name="signup" component={signupscreen}/>
        <Stack.Screen name="user" component={userscreen}/>
        <Stack.Screen name="usersetting" component={usersetting}/>
         <Stack.Screen name="signtest" component={signtestscreen}/>

=======
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
>>>>>>> Stashed changes
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;