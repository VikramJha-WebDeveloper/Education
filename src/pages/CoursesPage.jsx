import React from "react";
import PageHeading from "../components/PageHeading";
import Courses from "../components/Courses";
import Footer from "../components/Footer";

const CoursePage = () => {
  let title = "Courses";
  let description =
    "Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.";
  return (
    <>
      <PageHeading title={title} description={description}></PageHeading>
      <Courses></Courses>
      <Footer></Footer>
    </>
  );
};
export default CoursePage;
