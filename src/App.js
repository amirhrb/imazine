import { Routes, Route } from "react-router-dom";

//componntss
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduce from "./components/Introduce";
import ContactUs from "./components/ContactUs";
import HexaContainer from "./components/HexaContainer";

// route components
import HexaGrid from "./components/HexaGrid";
import Details from "./components/Details";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Introduce />
      <Routes>
        <Route path="/" element={<HexaContainer />}>
          <Route path="/" element={<HexaGrid />} />
          <Route path=":title" element={<Details />} />
        </Route>
      </Routes>
      <ContactUs />
    </div>
  );
}

export default App;
