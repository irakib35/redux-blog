import React, { useEffect } from "react";
import GoHome from "../components/nav/GoHome";
import RelatedPostList from "../components/relatedPost/RelatedPostList";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPost } from "../features/post/postSlice";
import { fetchLikes, loadLikes } from "../features/likes/likeSlice";
import { fetchSaved, loadSaved } from "../features/saved/savedSlice";

export default function Post() {
    const dispatch = useDispatch();
    const { postId } = useParams();
    const { post } = useSelector((state) => state.post);
    const { id, title, description, image, tags, likes, isSaved } = post || {};
    const { nplikes } = useSelector((state) => state.plikes);
    const { npsaved } = useSelector((state) => state.psaved);

    useEffect(() => {
        dispatch(fetchPost(postId));
    }, [dispatch, postId]);

    useEffect(() => {
        if (likes) {
            dispatch(loadLikes(likes));
        }
    }, [dispatch, likes]);

    useEffect(() => {
        dispatch(loadSaved(isSaved));
    }, [dispatch, isSaved]);

    let saves = npsaved ? "active" : "";
    let posttags;
    if (tags?.length > 0) {
        posttags = tags.map((tag) => (
            <span key={Math.random() * 10}>#{tag}, </span>
        ));
    }

    const likesHandler = () => {
        dispatch(fetchLikes({ id, nplikes }));
    };

    const savedHandler = () => {
        dispatch(fetchSaved({ id, npsaved }));
    };
    return (
        <>
            <GoHome />

            <section className="post-page-container">
                <main className="post">
                    <img
                        src={image}
                        alt={title}
                        className="w-full rounded-md"
                        id="lws-megaThumb"
                    />
                    <div>
                        <h1
                            className="mt-6 text-2xl post-title"
                            id="lws-singleTitle"
                        >
                            {title}
                        </h1>
                        <div className="tags" id="lws-singleTags">
                            {posttags}
                        </div>
                        <div className="btn-group">
                            <button
                                className="like-btn"
                                id="lws-singleLinks"
                                onClick={likesHandler}
                            >
                                <i className="fa-regular fa-thumbs-up"></i>
                                {nplikes}
                            </button>

                            <button
                                className={`${saves} save-btn`}
                                onClick={savedHandler}
                                id="lws-singleSavedBtn"
                            >
                                <i className="fa-regular fa-bookmark"></i>
                                {npsaved ? " Saved" : " Save"}
                            </button>
                        </div>
                        <div className="mt-6">
                            <p>{description}</p>
                        </div>
                    </div>
                </main>

                <RelatedPostList currentId={id} tags={tags} />
            </section>
        </>
    );
}
