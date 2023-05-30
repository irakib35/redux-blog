import React from "react";
import Sort from "../components/filter/Sort";
import PostList from "../components/posts/PostList";

export default function Home() {
    return (
        <>
            <section className="wrapper">
                <Sort />
                <PostList />
            </section>
        </>
    );
}
