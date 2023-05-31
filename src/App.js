import React from "react";
import "./main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/nav/Nav";
import Post from "./pages/Post";

function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posts/:postId" element={<Post />} />
            </Routes>
        </Router>
    );
}

export default App;
