import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faAddressCard,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

const SidebarCom = () => {
  const [activeLink, setActiveLink] = useState("");
  const sidebarStyle = {
    position: "fixed",
    height: "100%",
    width: "250px",
    top: "0",
    left: "0",
    backgroundColor: "#0a2492",
    paddingTop: "20px",
    zIndex: "1",
    transition: "all 0.3s ease",
    color: "white",
  };

  const sidebarHeaderStyle = {
    padding: "10px",
    textAlign: "center",
    color: "skyblue",
    borderBottom: "1px solid #4e5359",
  };

  const sidebarUlStyle = {
    padding: "20px 0",
  };

  const sidebarLiStyle = {
    padding: "8px 10px",
    backgroundColor: "#0a2492",
    color: "white",
  };

  const linkStyle = {
    textDecoration: "none",
    marginLeft: "10px",
    color: "white",
  };

  const activeLinkStyle = {
    color: "skyblue",
  };

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <div style={sidebarStyle}>
      <div style={sidebarHeaderStyle}>
        <h4>Navigation</h4>
      </div>
      <ul style={sidebarUlStyle}>
        <li style={sidebarLiStyle}>
          <FontAwesomeIcon
            icon={faUser}
            color={activeLink === "home" ? "skyblue" : "white"}
          />
          <Link
            style={
              activeLink === "home"
                ? { ...linkStyle, ...activeLinkStyle }
                : linkStyle
            }
            to="/"
            onClick={() => handleSetActiveLink("home")}
          >
            Home
          </Link>
        </li>
        <li style={sidebarLiStyle}>
          <FontAwesomeIcon
            icon={faAddressCard}
            color={activeLink === "about" ? "skyblue" : "white"}
          />
          <Link
            style={
              activeLink === "about"
                ? { ...linkStyle, ...activeLinkStyle }
                : linkStyle
            }
            to="/about"
            onClick={() => handleSetActiveLink("about")}
          >
            About
          </Link>
        </li>
        <li style={sidebarLiStyle}>
          <FontAwesomeIcon
            icon={faNewspaper}
            color={activeLink === "newPage" ? "skyblue" : "white"}
          />
          <Link
            style={
              activeLink === "newPage"
                ? { ...linkStyle, ...activeLinkStyle }
                : linkStyle
            }
            to="/NewPage"
            onClick={() => handleSetActiveLink("newPage")}
          >
            NewPage
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarCom;
