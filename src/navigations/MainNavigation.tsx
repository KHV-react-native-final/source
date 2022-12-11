import { LoginScreen, RegisterScreen } from "../screens"
import {TestLogin, TestPost, TestUploadImage} from "../screens/TestScreen"
import MainBottomNavigation from "./MainBottomNavigation"
import Stack from "./Stack"

export default () => {
  return (
    <Stack.Navigator initialRouteName="Test" screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen}/>
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="Test" component={TestPost} />
      <Stack.Screen name="Main" component={MainBottomNavigation} />
    </Stack.Navigator>
  )
}