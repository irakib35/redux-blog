import React from "react";

import Ai from "../../images/ai.jpg";
import { Link } from "react-router-dom";

export default function RelatedPostItem({ post }) {
    const { id, title, image, tags, createdAt } = post;

    let posttags;
    if (tags?.length > 0)
        posttags = tags.map((tag) => {
            posttags += <span>#{tag},</span>;
        });

    return (
        <>
            <div className="card">
                <Link to={`/posts/${id}`}>
                    <img src={image} className="card-image" alt="" />
                </Link>
                <div className="p-4">
                    <Link
                        to={`/posts/${id}`}
                        className="text-lg post-title lws-RelatedPostTitle"
                    >
                        {title}
                    </Link>
                    <div className="mb-0 tags">{posttags}</div>
                    <p>{createdAt}</p>
                </div>
            </div>
        </>
    );
}
