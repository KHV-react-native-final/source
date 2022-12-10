import TestScreen from "../screens/TestScreen"
import MainBottomNavigation from "./MainBottomNavigation"
import Stack from "./Stack"

export default () => {
  return (
    <Stack.Navigator initialRouteName="Test" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Test" component={TestScreen} />
      {/* <Stack.Screen name="LoginScreen" component={Login Screen}/> */}
      {/* <Stack.Screen name="RegisterScreen" component={RegisterScreen} /> */}
      <Stack.Screen name="Main" component={MainBottomNavigation} />
    </Stack.Navigator>
  )
}