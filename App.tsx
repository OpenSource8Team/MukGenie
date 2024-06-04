import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { enableScreens } from 'react-native-screens';
import AsyncStorage from '@react-native-async-storage/async-storage';

//임포트 된 화면들
import mainscreen from "./layout/main_screen";
import loginscreen from "./layout/login_screen";
import signupscreen from "./layout/signup_screen";
import userscreen from "./layout/user_infomation";
import surveysetting from "./layout/survey_setting";
import surveyresult from "./layout/survey_result";
import surveyscreen from "./layout/survey_screen";
import usersetting from "./layout/user_setting";
import signtestscreen from "./layout/signtest_screen";

enableScreens();
const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const userToken = await AsyncStorage.getItem('userToken');
        // userToken이 존재하면 로그인된 상태로 간주하고 홈 화면으로 이동
        // 그렇지 않다면 로그인 화면으로 이동
        // navigation 객체가 필요하여 사용하려면, 어디서 이 객체를 가져오는지 알 필요가 있습니다.
        // 여기에서는 Stack.Navigator에서 어떤 방식으로 navigation 객체를 가져오는지 모르기 때문에 이 부분은 수정이 필요합니다.
        // navigation.navigate(userToken ? 'muk' : 'LoginScreen');
      } catch (error) {
        console.error(error);
        // 에러 처리
      }
    };
    checkLoginStatus();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="muk"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3ED4BE',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="muk" component={mainscreen} />
        <Stack.Screen name="surveysetting" component={surveysetting} />
        <Stack.Screen name="survey" component={surveyscreen}/>
        <Stack.Screen name="result" component={surveyresult}/>
        <Stack.Screen name="login" component={loginscreen}/>
        <Stack.Screen name="signup" component={signupscreen}/>
        <Stack.Screen name="user" component={userscreen}/>
        <Stack.Screen name="usersetting" component={usersetting}/>
        <Stack.Screen name="signtest" component={signtestscreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
