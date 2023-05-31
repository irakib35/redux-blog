import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeFilters } from "../../features/filters/filtersSlice";

export default function Saved() {
    const dispatch = useDispatch();
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        dispatch(changeFilters(filter));
    }, [dispatch, filter]);

    return (
        <div className="sidebar-content">
            <h4>Filter</h4>
            <div className="radio-group">
                <div>
                    <input
                        type="radio"
                        name="filter"
                        value="All"
                        id="lws-all"
                        checked={filter === "All"}
                        className="radio"
                        onChange={(e) => setFilter(e.target.value)}
                    />
                    <label for="lws-all">All</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="filter"
                        id="lws-saved"
                        value="Saved"
                        className="radio"
                        checked={filter === "Saved"}
                        onChange={(e) => setFilter(e.target.value)}
                    />
                    <label for="lws-saved">Saved</label>
                </div>
            </div>
        </div>
    );
}
