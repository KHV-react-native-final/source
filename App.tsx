import { NavigationContainer } from "@react-navigation/native";
import { MainNavigation } from "./src/navigations";

export default () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  )
}
