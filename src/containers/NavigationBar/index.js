import React from "react";
import { MoonIcon, SunIcon } from "Icons";
import { Language } from "Components";
import "./styles.css";

const NavigationBar = () => {
  return (
    <nav>
      <MoonIcon />
      <SunIcon />
      <Language />
    </nav>
  );
};

export default NavigationBar;
