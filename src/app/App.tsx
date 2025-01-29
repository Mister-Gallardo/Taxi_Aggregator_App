import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/ui/Home';
import PassengerPage from '../pages/PassengerPage/ui/PassengerPage';
import DriverPage from '../pages/DriverPage/ui/DriverPage';

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
