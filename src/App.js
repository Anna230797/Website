import React from "react";
import "./App.css";
import Home from "./pages/home";
import News from "./pages/news";
import Information from "./pages/info";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="news" element={<News />}></Route>
            <Route path="news/info" element={<Information />}></Route>
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
