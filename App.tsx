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

enableScreens();
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName = "MUK"
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