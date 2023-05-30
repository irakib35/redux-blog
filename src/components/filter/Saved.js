import React from "react";

export default function Saved() {
    return (
        <div className="sidebar-content">
            <h4>Filter</h4>
            <div className="radio-group">
                <div>
                    <input
                        type="radio"
                        name="filter"
                        id="lws-all"
                        checked
                        className="radio"
                    />
                    <label for="lws-all">All</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="filter"
                        id="lws-saved"
                        className="radio"
                    />
                    <label for="lws-saved">Saved</label>
                </div>
            </div>
        </div>
    );
}
