import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Landing from "./Landing";
import reportWebVitals from "./reportWebVitals";
import Nav from "./Nav";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Nav />
    <Landing />
    <About />
    <Projects />
    <Contact />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
