import { Route, Routes } from "react-router-dom";
import React from "react";
import './App.css'

import Landing from "./components/Landing/Landing";
import Detail from "./components/Detail/Detail";
import Home from "./components/Home/Home.jsx";
import Form from "./components/Form/Form";
import Activities from "./components/Activities/Activities";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/form" element={<Form />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
}

export default App