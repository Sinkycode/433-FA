import React from "react";
import {
  AboutSection,
  HeroSection,
  MissionVision,
  WhoIsFor,
  ProgramFeatures,
  LocationSection,
  Facilities,
  Why433Section1,
  Why433Section2,
  Methodology,
  Gallery,
  Gallery2,
  SingleImage,
} from "./sections/index";

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
      <section className="min-h-screen relative">
        <Methodology />
      </section>
      <section className="min-h-screen relative">
        <Gallery />
      </section>
      <section>
        <Gallery2 />
      </section>
      <section>
        <SingleImage />
      </section>
    </>
  );
};

export default App;
