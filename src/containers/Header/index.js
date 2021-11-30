import React from "react";
import { MoonIcon, LocationIcon } from "Icons";
import { Thumbnail } from "Components";
import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <MoonIcon />
      </nav>
      <section className="hero">
        <Thumbnail image="" description="placeholder image" />
        <div className="info">
          <p className="info__title">Clarette Terrasi Díaz</p>
          <div className="info__location">
            <LocationIcon />
            <p className="text">Madrid</p>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
