import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Auth from "./pages/Authentication";  
import Service from "./pages/services";
import Booking from "./pages/Booking"; 
import About from "./pages/About";
import ContactUs from "./pages/contact";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/services" element={<Service />} />        
        <Route path="/services/booking/:id/:subServiceName" element={<Booking />} />   
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
