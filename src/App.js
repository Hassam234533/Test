import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import NewPage from "./Components/NewPage";
import UserDetails from "./Components/UserDetails";
import ChildtoParentsComponent from "./Components/ChildtoParentsComponents";

const App = () => {
  const greet = () => {
    alert("Hello from App!");
  };
  return (
    <>
      <Header />
      <Navbar />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/NewPage" element={<NewPage />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </div>

      <ChildtoParentsComponent greet={greet} />
    </>
  );
};

export default App;
