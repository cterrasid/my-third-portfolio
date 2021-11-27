import React from "react";
import { Text, List } from "Components";
import "./styles.css";

const socialNetworks = [
  { name: "LinkedIn", link: "#" },
  { name: "Github", link: "#" },
  { name: "Twitter", link: "#" }
];

const Footer = () => {
  return (
    <footer>
      <div>
        <section>
          <Text Tag="h3" text="Clarette Terrasi Díaz" />
          <Text
            Tag="p"
            text="If you'd like to say hello, email clarette.terrasi@gmail.com."
          />
        </section>
        <section>
          <Text Tag="h3" text="Social" />
          <List items={socialNetworks} />
        </section>
      </div>
    </footer>
  );
};

export default Footer;
