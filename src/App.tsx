import { Route, Routes } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route path="/contact_us" element={<></>} />
      <Route path="/about_us" element={<></>} />
      <Route path="" element={<Home />} />
    </Routes>
  );
}

export default App;
