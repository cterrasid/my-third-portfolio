import * as React from "react";

const MoonIcon = (props) => {
  return (
    <svg height={21} width={21} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11.5 3.5c1.328 0 2.57.37 3.628 1.012a6 6 0 00-.001 11.977A7 7 0 1111.5 3.5z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MoonIcon;
