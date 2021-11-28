import React from "react";
import { Link } from "gatsby";
import "./styles.css";

const Thumbnail = ({ link, route = "/", image, description }) => {
  return (
    <div className="thumbnail">
      {link ? (
        <a href={link} className="thumbnail__link">
          <img className="thumbnail__image" src={image} alt={description} />
        </a>
      ) : (
        <Link to={route} className="thumbnail__route">
          <img className="thumbnail__image" src={image} alt={description} />
        </Link>
      )}
    </div>
  );
};

export default Thumbnail;
