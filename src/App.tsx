import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

function App() {
  return (
    <Routes>
      <Route path="/contact_us" element={<ContactUs />} />
      <Route path="/about_us" element={<AboutUs />} />
      <Route path="" element={<Home />} />
    </Routes>
  );
}

export default App;
