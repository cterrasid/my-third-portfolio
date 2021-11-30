import React from "react";
import "./styles.css";

const List = ({ Tag = "ul", items, className, icon }) => {
  return (
    <Tag>
      {items.map((item) => (
        <li className={`list ${className}`}>
          {item.link ? (
            <a href={item.link} target="_blank" className="list__link">
              {item.name}
              {icon}
            </a>
          ) : (
            item.name
          )}
        </li>
      ))}
    </Tag>
  );
};

export default List;
