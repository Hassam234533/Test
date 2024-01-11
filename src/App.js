import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserDetails from "./Components/UserDetails";
import SidebarCom from "./Components/SidebarCom";
import Usercard from "./Components/Usercard";

const App = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <SidebarCom />
          </div>
          <div className="col-md-9">
            <Routes>
              <Route exact path="/" element={<Usercard />} />

              <Route path="/user/:id" element={<UserDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
