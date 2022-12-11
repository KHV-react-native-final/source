import { NavigationContainer } from "@react-navigation/native";
import { MainNavigation } from "./src/navigations";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux"
import postsReducer from "./src/stores/PostsSlice"

export const store = configureStore({
    reducer: {
        posts: postsReducer
    },
})

export default () => {
  return (
    <Provider store={store}>
        <NavigationContainer>
            <MainNavigation />
        </NavigationContainer>
    </Provider>
  )
}