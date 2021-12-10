import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import "./App.css";
import Crypto from "./components/Crypto-components/Crypto";
import Navbar from "./components/Navbar-components/Navbar";
import Animation from "./components/Animation-components/Animation";
import React from "react";
import ServiceExport from "./components/Service-components/ServiceExport";
import Up from "./Up";
import About from "./components/About-components/About";
import Form from "./components/Form-components/Form";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Animation />} />
        <Route path="/services" element={<ServiceExport />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<Form />} />
        <Route path="/market" element={<Crypto />} />
      </Routes>
      <Up />
    </BrowserRouter>
  );
}

export default App;
