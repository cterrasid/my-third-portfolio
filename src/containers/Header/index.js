import React from "react";
import { LocationIcon, MoonIcon, SunIcon } from "Icons";
import { Language, Thumbnail } from "Components";
import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <MoonIcon />
        <SunIcon />
        <Language />
      </nav>
      <section className="hero">
        <Thumbnail
          image="https://via.placeholder.com/150"
          description="placeholder image"
        />
        <div className="info">
          <h1 className="info__title">Clarette Terrasi Díaz</h1>
          <h2 className="info__subtitle">Data | Development | Geography</h2>
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
