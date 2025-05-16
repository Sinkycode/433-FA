import React from "react";
import {
  AboutSection,
  HeroSection,
  MissionVision,
  TeamManagement,
  WhoIsFor,
  ProgramFeatures,
  LocationSection,
  Facilities,
  Why433Section1,
  Why433Section2,
  Methodology,
  Gallery,
  Gallery2,
  Gallery3,
  Gallery4,
  LastSection,
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
        <TeamManagement />
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
      <section>
        <Gallery3 />
      </section>
      <section>
        <Gallery4 />
      </section>
      <section>
        <LastSection />
      </section>
    </>
  );
};

export default App;
