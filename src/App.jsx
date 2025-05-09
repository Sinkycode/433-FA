import React from "react";
import {
  AboutSection,
  HeroSection,
  MissionVision,
  WhoIsFor,
  ProgramFeatures,
  LocationSection,
  Facilities,
} from "./sections/index";
import Why433Section1 from "./sections/Why433Section1";
import Why433Section2 from "./sections/Why433Section2";

const App = () => {
  return (
    <>
      <section>
        <HeroSection />
      </section>
      <section>
        <AboutSection />
      </section>
      <section>
        <ProgramFeatures />
      </section>
      <section>
        <MissionVision />
      </section>
      <section>
        <WhoIsFor />
      </section>
      <section>
        <LocationSection />
      </section>
      <section>
        <Facilities />
      </section>
      <section>
        <Why433Section1 />
      </section>
      <section>
        <Why433Section2 />
      </section>
    </>
  );
};

export default App;
