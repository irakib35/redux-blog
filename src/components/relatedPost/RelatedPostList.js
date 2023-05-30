import React from "react";
import RelatedPostItem from "./RelatedPostItem";

export default function RelatedPostList() {
    return (
        <aside>
            <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
                Related Posts
            </h4>
            <div className="space-y-4 related-post-container">
                <RelatedPostItem />
            </div>
        </aside>
    );
}
