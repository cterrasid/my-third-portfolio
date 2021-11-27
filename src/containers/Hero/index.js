import React from "react";
import { Text } from "Components";
import "./styles.css";

const Hero = () => {
  return (
    <section className="hero">
      <img src="https://via.placeholder.com/150" alt="placeholder image" />
      <div>
        <Text Tag="h1" text="Clarette Terrasi Díaz" />
        <Text Tag="h3" text="Frontend Developer" />
        <Text Tag="p" text="Madrid" />
      </div>
    </section>
  );
};

export default Hero;
