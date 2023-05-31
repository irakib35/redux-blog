import React, { useEffect } from "react";
import RelatedPostItem from "./RelatedPostItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedPost } from "../../features/relatedPost/relatedPostSlice";

export default function RelatedPostList({ currentId, tags }) {
    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state.relatedPost);

    useEffect(() => {
        dispatch(fetchRelatedPost({ currentId, tags }));
    }, [dispatch, currentId, tags]);

    let content;
    if (posts?.length > 0) {
        content = posts.map((post) => (
            <RelatedPostItem key={post.id} post={post} />
        ));
    }

    return (
        <aside>
            <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
                Related Posts
            </h4>
            <div className="space-y-4 related-post-container">{content}</div>
        </aside>
    );
}
