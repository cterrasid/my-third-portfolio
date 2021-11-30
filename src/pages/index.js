import React from "react";
import { About, Section } from "Containers";
import { Heading } from "Components";

const HomePage = () => {
  return (
    <main className="content wrapper">
      <About />
      <Section>
        <Heading Tag="h2" text="Projects" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </Section>
    </main>
  );
};

export default HomePage;
