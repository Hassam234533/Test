import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <FontAwesomeIcon style={{ marginleft: "30px" }} icon={faEye} />
      <header className="bg-light text-light py-3">
        <div className="container">
          <h1>My Web App</h1>
          <hr />
          {/* Additional header content */}
        </div>
      </header>
    </>
  );
};

export default Header;
