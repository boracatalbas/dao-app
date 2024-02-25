import Sponsors from "./pages/sponsors/OurSponsor";
import BecomeSponsor from "./pages/sponsors/BecomeSponsor";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Speakers from "./pages/speakers/Speakers";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/become-sponsor" element={<BecomeSponsor />} />
      </Routes>
    </div>
  );
}

export default App;
