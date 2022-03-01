import React from "react";
import "./Navigation.css";

const Navigation = ({ onRouteChange }) => {
  return (
    <nav className="signOut">
      <p
        onClick={() => onRouteChange("signin")}
        className="f3 link dim black underline pa3 pointer"
      >
        Sign out
      </p>
    </nav>
  );
};

export default Navigation;
