import { createStackNavigator } from "@react-navigation/stack";
//import Login from "../screens/Authentication/login";
//import SignUpScreen from "../screens/Authentication/signup";
//import VerificationScreen from "../screens/Authentication/verification";
//import HomeScreen from "../screens/home";
import MainNavigation from "./mainNavigator";
import OnBoardScreen from "../onboard";
import login from "../Authentication/login";
import SignUpScreen from "../Authentication/signup";
import VerificationScreen from "../Authentication/verification";
import HomeScreen from "../home";

const stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <stack.Navigator initialRouteName="MainNavigator">
      <stack.Screen
        name="OnBoard"
        component={OnBoardScreen}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name="Login"
        component={login}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name="Verification"
        component={VerificationScreen}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <stack.Screen
      name="MainNavigator"
      component={MainNavigation} 
      options={{ headerShown: false }}
      />
      
    </stack.Navigator>
  );
};
