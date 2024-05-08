import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { enableScreens } from 'react-native-screens';
import { default as mainscreen } from "./layout/main_screen";
import { default as loginscreen } from "./layout/login_screen";
import { default as sighupscreen } from "./layout/sighup_screen";
import { default as userscreen } from "./layout/user_infomation";
import { default as surveysetting } from "./layout/survey_setting";
import { default as surveyresult } from "./layout/survey_result";
import { default as surveyscreen } from "./layout/survey_screen";
import { default as surveylog } from "./layout/survey_logs";
//화면들을 임포트 시킴
enableScreens();
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName = "MUK"
        screenOptions={{
          headerStyle: {
          backgroundColor: '#6750A4', // 바탕색을 원하는 색상으로 변경합니다.
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
        <Stack.Screen name="logs" component={surveylog}/>
        <Stack.Screen name="login" component={loginscreen}/>
        <Stack.Screen name="sighup" component={sighupscreen}/>
        <Stack.Screen name="user" component={userscreen}/>
     
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;