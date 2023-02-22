import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/home"
import { Bio } from "./pages/bio"
import { Blog } from "./pages/blog"
import { Resume } from "./pages/resume"
import { Contact } from "./pages/contact"
import './App.css'

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
    );
}

export default App;
