import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<BuyCredit />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
