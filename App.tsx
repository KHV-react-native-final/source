import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { MainNavigation } from "./src/navigations";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux"
import postsReducer from "./src/stores/PostsSlice"

export const store = configureStore({
    reducer: {
        posts: postsReducer
    },
})
import auth from "@react-native-firebase/auth";
import { Alert } from "react-native";

export default () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  const onAuthStateChanged = (user: any) => {
    console.log("user: ", user);
    setUser(user);
    if (user) Alert.alert("Login sucessfully!")
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const unSubscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return unSubscriber; // unsubscribe on unmount
  }, []);
  return (
    <Provider store={store}>
        <NavigationContainer>
            <MainNavigation />
        </NavigationContainer>
    </Provider>
  )
}