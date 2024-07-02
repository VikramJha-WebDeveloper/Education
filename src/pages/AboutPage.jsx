import React from "react";
import PageHeading from "../components/PageHeading";
import About from "../components/about";
import Counts from "../components/counts";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

const AboutPage = () => {
  let title = "About Us";
  let description =
    "Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.";
  return (
    <>
      <PageHeading title={title} description={description}></PageHeading>
      <About></About>
      <Counts></Counts>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </>
  );
};
export default AboutPage;
