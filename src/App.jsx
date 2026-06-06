import { Routes, Route } from "react-router-dom";
import AgeGate from "./components/AgeGate";
import Home from "./pages/Home";
import About from "./pages/About";
import Cigars from "./pages/Cigars";
import CigarDetail from "./pages/CigarDetail";
import Locations from "./pages/Locations";
import Shop from "./pages/Shop";
import Events from "./pages/Events";

export default function App() {
  return (
    <>
      <AgeGate />
      <Routes>
        <Route path="/"             element={<Home />}        />
        <Route path="/about"        element={<About />}       />
        <Route path="/cigars"       element={<Cigars />}      />
        <Route path="/cigars/:slug" element={<CigarDetail />} />
        <Route path="/locations"    element={<Locations />}   />
        <Route path="/shop"         element={<Shop />}        />
        <Route path="/events"       element={<Events />}      />
      </Routes>
    </>
  );
}
