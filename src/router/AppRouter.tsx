import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
// import About from "../pages/About";
// import Skills from "../pages/Skills";
// import Project from "../pages/Project";
// import Contact from "../pages/Contact";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/about" element={<About />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/projects" element={<Project />}></Route>
        <Route path="/contact" element={<Contact />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}
