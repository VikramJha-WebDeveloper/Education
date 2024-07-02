import React from "react";
import PageHeading from "../components/PageHeading";
import Trainers from "../components/Trainers";
import Footer from "../components/Footer";

const TrainersPage = () => {
  let title = "Trainers";
  let description =
    "Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.";
  return (
    <>
      <PageHeading title={title} description={description}></PageHeading>
      <Trainers></Trainers>
      <Footer></Footer>
    </>
  );
};
export default TrainersPage;
