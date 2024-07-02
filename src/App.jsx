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
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/about" element={<AboutPage></AboutPage>}></Route>
        <Route path="/courses" element={<CoursesPage></CoursesPage>}></Route>
        <Route path="/trainers" element={<TrainersPage></TrainersPage>}></Route>
        <Route path="/events" element={<EventsPage></EventsPage>}></Route>
        <Route path="/pricing" element={<PricingPage></PricingPage>}></Route>
        <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
      </Routes>
    </MyApp>
  );
}

export default App;
