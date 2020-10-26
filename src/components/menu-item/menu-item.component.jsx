import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ section, history }) => {
  const { title, imageUrl, size, linkUrl } = section;
  return (
    <div className={`menu-item ${size}`} onClick={() => history.push(linkUrl)}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
