import React from "react";

const Text = ({ Tag, className, text }) => {
  return <Tag className={className}>{text}</Tag>;
};

export default Text;
