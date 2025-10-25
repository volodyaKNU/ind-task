import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";

function App() {
  return (
    <Routes>
      <Route path="/contact_us" element={<></>} />
      <Route path="/about_us" element={<AboutUs />} />
      <Route path="" element={<Home />} />
    </Routes>
  );
}

export default App;
