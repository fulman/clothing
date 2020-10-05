import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="logo">
        <Logo />
      </Link>
    </div>
  );
}

export default Header;
