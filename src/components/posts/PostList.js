import React, { useEffect } from "react";
import PostItem from "./PostItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../features/blogs/blogsSlice";

export default function Postlist() {
    const dispatch = useDispatch();
    const { isLoading, isError, blogs, errmsg } = useSelector(
        (state) => state.blogs
    );

    useEffect(() => {
        dispatch(fetchBlogs());
    }, [dispatch]);

    let content;

    if (isLoading === true) content = <div>Loading...</div>;

    if (isLoading === false && isError === true) content = <div>{errmsg}</div>;

    if (isLoading === false && isError === false && blogs?.length === 0)
        content = <div>No blog post found</div>;

    if (isLoading === false && isError === false && blogs?.length > 0)
        content = blogs.map((blog) => <PostItem key={blog.id} blog={blog} />);

    return (
        <main className="post-container" id="lws-postContainer">
            {content}
        </main>
    );
}
