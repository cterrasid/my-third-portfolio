import React from "react";

const List = ({ Tag = "ul", items }) => {
  return (
    <Tag>
      {items.map((item) => (
        <li>
          {item.link ? (
            <a href={item.link} target="_blank">
              {item.name}
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
