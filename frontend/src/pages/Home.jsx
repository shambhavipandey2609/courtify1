import React from "react";
import Header from "../components/Header";
import TopLawyers from "../components/TopLawyers";
import Banner from "../components/Banner";
import SpecialityMenu from "../components/SpecialityMenu";

const Home = () => {
  return (
    <div>
      {/* Header Section */}
      <header>
        <Header />
      </header>

      {/* Main Content */}
      <main>
        <section>
          <SpecialityMenu />
        </section>
        <section>
          <TopLawyers />
        </section>
        <section>
          <Banner />
        </section>
      </main>
    </div>
  );
};

export default Home;
