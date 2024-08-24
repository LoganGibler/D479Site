import React, { useState, useEffect } from "react";
import "./App.css";
import {
  Header,
  Navbar,
  Home,
  Footer,
  Transportation,
  Activities,
  Lodging,
} from "./components";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  const [activeLink, setActiveLink] = useState("/");

  return (
    <main>
      <BrowserRouter>
        <Navbar
          key="navigation"
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
        <Routes>
          <Route path="/" element={[<Header key="header" />, <Home />]}></Route>
          <Route path="/Transportation" element={<Transportation />}></Route>
          <Route path="/Activities" element={<Activities />}></Route>
          <Route path="/Lodging" element={<Lodging />}>
            {" "}
          </Route>
        </Routes>
        <Footer setActiveLink={setActiveLink} />
      </BrowserRouter>
    </main>
  );
}

export default App;
