import React from "react";
import NavBar from "../../components/Navbar/Navbar";
import { Homepage } from "./styles";
import Hero from "../../components/HomePage/Hero";
import ProofSection from "../../components/HomePage/BeneficesSection";
import FinalCTA from "../../components/HomePage/FinalCTA";
import Footer from "../../components/HomePage/Footer";
import WorkSection from "../../components/HomePage/WorkSection";
import ExamplesSection from "../../components/HomePage/PortfoliosExamples";

const HomePage = () => {
  return (
    <Homepage>
      <Hero />
      <ProofSection />
      <WorkSection />
      <ExamplesSection />
      <FinalCTA />
      <Footer />
    </Homepage>
  );
};

export default HomePage;
