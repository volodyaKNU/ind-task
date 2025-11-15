import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/contact_us" element={<ContactUs />} />
      <Route path="/about_us" element={<AboutUs />} />
      <Route path="" element={<Home />} />
    </Routes>
  );
}

export default App;
