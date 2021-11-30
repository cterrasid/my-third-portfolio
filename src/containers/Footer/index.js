import React from "react";
import { List } from "Components";
import { ArrowRightIcon } from "Icons";
import "./styles.css";

const socialNetworks = [
  { name: "LinkedIn", link: "#" },
  { name: "Github", link: "#" },
  { name: "Twitter", link: "#" }
];

const Footer = () => {
  return (
    <footer className="footer wrapper">
      <section className="footer__section">
        <p className="footer__title">Clarette Terrasi Díaz</p>
        <p className="content">
          If you'd like to say hello, email clarette.terrasi@gmail.com.
        </p>
      </section>
      <section className="footer__section">
        <p className="footer__title">Social</p>
        <List
          items={socialNetworks}
          className="content"
          icon={<ArrowRightIcon />}
        />
      </section>
    </footer>
  );
};

export default Footer;
