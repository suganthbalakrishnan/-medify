import Banner from "./components/Banner/Banner";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FindDoctors from "./components/Navigation/pages/FindDoctors";
import Home from "./components/Navigation/pages/Home";
import Hospitals from "./components/Navigation/pages/Hospitals";
import Medicines from "./components/Navigation/pages/Medicines";
import Surgeries from "./components/Navigation/pages/Surgeries";
import SoftwareProvider from "./components/Navigation/pages/SoftwareProvider";
import Facilities from "./components/Navigation/pages/Facilities";
import Carousel from "./components/Carousel/Carousel";
import Specialisation from "./components/Specialisation/Specialisation";
import "./App.css";

function App() {
  return (
    <>
      <Banner />
      <div className="App">
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/findDoctors" element={<FindDoctors />} />
            <Route path="/hospitals" element={<Hospitals />} />
            <Route path="/medicines" element={<Medicines />} />
            <Route path="/surgeries" element={<Surgeries />} />
            <Route path="/softwareProvider" element={<SoftwareProvider />} />
            <Route path="/facilities" element={<Facilities />} />
          </Routes>
        </Router>
        <Carousel/>
        <Specialisation />
      </div>
    </>
  );
}

export default App;