import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../features/blogs/blogsSlice";
import postReducer from "../features/post/postSlice";
import likesReducer from "../features/likes/likeSlice";

export const store = configureStore({
    reducer: {
        blogs: blogsReducer,
        post: postReducer,
        plikes: likesReducer,
    },
});
