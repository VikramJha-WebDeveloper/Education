import Navbar from "./components/Navbar";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import TrainersPage from "./pages/TrainersPage";
import EventsPage from "./pages/EventsPage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";

const MyApp = styled.div`
  .theme-bg {
    background-color: #ed7845;
    color: white;
  }
  .theme-text {
    color: #ed7845;
  }
  .light-theme-bg {
    background-color: #f8a987;
  }
  .light-gray-bg {
    background-color: #eeeeee;
  }
  .theme-border {
    border: 1px solid #ed7845;
  }
`;

function App() {
  return (
    <MyApp>
      <Navbar></Navbar>

      <Routes>
        <Route path="/Education" element={<HomePage></HomePage>}></Route>
        <Route
          path="/Education/about"
          element={<AboutPage></AboutPage>}
        ></Route>
        <Route
          path="/Education/courses"
          element={<CoursesPage></CoursesPage>}
        ></Route>
        <Route
          path="/Education/trainers"
          element={<TrainersPage></TrainersPage>}
        ></Route>
        <Route
          path="/Education/events"
          element={<EventsPage></EventsPage>}
        ></Route>
        <Route
          path="/Education/pricing"
          element={<PricingPage></PricingPage>}
        ></Route>
        <Route
          path="/Education/contact"
          element={<ContactPage></ContactPage>}
        ></Route>
      </Routes>
    </MyApp>
  );
}

export default App;
