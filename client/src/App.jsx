import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Authentication";  
import Service from "./pages/services";
import Dashboard from "./pages/dashboard";
import Booking from "./pages/Booking"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/services" element={<Service />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/services/booking/:id/:subServiceName" element={<Booking />} />
        {/* Add other routes like /dashboard, /booking etc. */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
