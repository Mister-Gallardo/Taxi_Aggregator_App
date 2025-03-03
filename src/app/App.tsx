import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import PassengerPage from "../pages/PassengerPage/PassengerPage";
import DriverPage from "../pages/DriverPage/DriverPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/passenger" element={<PassengerPage />} />
      <Route path="/driver" element={<DriverPage />} />
    </Routes>
  );
}

export default App;
