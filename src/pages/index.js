import React from "react";
import { About, Footer, NavigationBar, Hero } from "Containers";

const HomePage = () => {
  return (
    <div>
      <header>
        <NavigationBar />
        <Hero />
      </header>
      <main>
        <About />
        <section>Projects</section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
