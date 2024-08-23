import React, { useState } from "react";
import "./App.css";
import { Header } from "./components";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
