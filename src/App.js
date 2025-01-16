import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import TourPackagesPage from "./pages/TourPackagesPage";
import ContactUsPage from "./pages/ContactUsPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      {/* <HomePage /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tour-packages" element={<TourPackagesPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Routes>
    </Router>
  );
};
export default App;