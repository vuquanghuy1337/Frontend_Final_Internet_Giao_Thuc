import { Routes, Route, Link } from "react-router-dom";

import Navbar from "./Components/Navbar";
import * as React from "react";
import Home from "./Layout/Home";
import Todo from "./Todo/Todos";

const About = React.lazy(() => import("./Layout/About"));
const Blog = React.lazy(() => import("./Blog/Blog"));
const Library = React.lazy(() => import("./Library/Library"));

function App() {
  const isLogin = true;

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home isLogin={isLogin} />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="library" element={<Library />} />
        <Route path="todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
