import React from "react";
import "./styles.css";

const Thumbnail = ({ image, description }) => {
  return (
    <div className="thumbnail">
      {image ? (
        <img className="thumbnail__image" src={image} alt={description} />
      ) : (
        "C"
      )}
    </div>
  );
};

export default Thumbnail;
