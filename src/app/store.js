import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../features/blogs/blogsSlice";
import postReducer from "../features/post/postSlice";
import likesReducer from "../features/likes/likeSlice";
import savedReducer from "../features/saved/savedSlice";
import relatedPostReducer from "../features/relatedPost/relatedPostSlice";
import filtersReducer from "../features/filters/filtersSlice";

export const store = configureStore({
    reducer: {
        blogs: blogsReducer,
        post: postReducer,
        plikes: likesReducer,
        psaved: savedReducer,
        relatedPost: relatedPostReducer,
        filterPost: filtersReducer,
    },
});
