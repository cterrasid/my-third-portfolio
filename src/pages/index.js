import React from "react";
import { MoonIcon } from "../icons";

const HomePage = () => {
  return (
    <div>
      <header>
        <nav>
          <MoonIcon />
        </nav>
        <section>Hero</section>
      </header>
      <main>
        <section>About</section>
        <section>Projects</section>
      </main>
      <footer>
        <section>Social Networks</section>
      </footer>
    </div>
  );
};

export default HomePage;
