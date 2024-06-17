import 'bootstrap/dist/css/bootstrap.min.css';
import ZwolfHeader from './Components/CwolfHeader';
import HeroSection from './Components/HeroSection';
import About from './Components/About';
import Services from './Components/Services';
import Howwework from './Components/Howwework';
import Ourclient from './Components/Ourclient';
import Zwolfooter from './Components/Zwolfooter';
import ContactUs from './Components/ContactUs';
import MeetClient from './Components/MeetClient';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Privacy from './Components/Privacy';
import Termandcondition from './Components/Termandcondition';
import RefundPolicy from './Components/refund';

function App() {
  return (
    <>
      <BrowserRouter>
        <ZwolfHeader />
        <Routes>
          <Route path="/" element={<Home/>}  />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services className="bg-dark" />} />
          <Route path="/how-we-work" element={<Howwework />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/our-client" element={<Ourclient />} />
          <Route path="/meet-client" element={<MeetClient />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-and-conditions" element={<Termandcondition />} />
          <Route path="/refund-policy" element={<RefundPolicy/>} />

        </Routes>
        <Zwolfooter />
      </BrowserRouter>
    </>
  );
}

export default App;
