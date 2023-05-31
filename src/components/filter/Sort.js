import React, { useEffect, useState } from "react";
import Saved from "./Saved";
import { useDispatch } from "react-redux";
import { changeSort } from "../../features/filters/filtersSlice";

export default function Sort() {
    const [sorts, setSorts] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeSort(sorts));
    }, [dispatch, sorts]);

    return (
        <aside>
            <div className="sidebar-items">
                <div className="sidebar-content">
                    <h4>Sort</h4>
                    <select
                        value={sorts}
                        name="sort"
                        id="lws-sort"
                        className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
                        onChange={(e) => setSorts(e.target.value)}
                    >
                        <option value="">Default</option>
                        <option value="newest">Newest</option>
                        <option value="most_liked">Most Liked</option>
                    </select>
                </div>
                <Saved />
            </div>
        </aside>
    );
}
