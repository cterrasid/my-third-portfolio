import React from "react";
import "./styles.css";

const Heading = ({ Tag, className = "", text }) => {
  const headingClass = {
    h1: "",
    h2: "title--second",
    h3: "title--third"
  };

  return (
    <Tag className={`title ${headingClass[Tag]} ${className}`}>{text}</Tag>
  );
};

export default Heading;
