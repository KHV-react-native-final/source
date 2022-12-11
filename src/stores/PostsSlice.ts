import {createSlice, Draft} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    postList: []
}

export const PostsSlice = createSlice({
    name: 'PostsSlice',
    initialState,
    reducers: {
        set: (state: Draft<any>, action: PayloadAction<any> ) => {
            state.postList = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { set } = PostsSlice.actions

export default PostsSlice.reducer