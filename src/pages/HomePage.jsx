import React from "react";
import Hero from "../components/Hero";
import About from "../components/about";
import Counts from "../components/counts";
import WhyUs from "../components/WhyUs";
import Features from "../components/Features";
import Courses from "../components/Courses";
import TrainersIndex from "../components/TrainersIndex";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Counts></Counts>
      <WhyUs></WhyUs>
      <Features></Features>
      <Courses></Courses>
      <TrainersIndex></TrainersIndex>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
