// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
// import './App.css';
import Home from "./Components/Homepage/home";
import Login from "./Components/LoginFolder/LoginPage";
import CustRegistration from "./Components/Register/CustRegistration";
import ServRegistration from "./Components/Register/ServRegistration";
import ContactUs from "./Components/Homepage/ContactUs";
import AdminHomePage from "./Components/Homepage/AdminHomePage";
import CustomerHomePage from "./Components/Homepage/CustomerHomePage";
import ServiceCenterHomePage from "./Components/Homepage/ServiceCenterHome";
import Logout from "./Components/Logout";
import BookAppointment from "./Components/UseCases/BookAppointment";
import Rating from "./Components/UseCases/Rating";
import VehDetails from "./Components/UseCases/VehDetails";
import ViewServiceCenters from "./Components/UseCases/ViewServiceCenters";
import TrackProcess from "./Components/UseCases/TrackProcess";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CustRegistration" element={<CustRegistration />} />
        <Route path="/ServRegistration" element={<ServRegistration />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        {/* <Route path="/customerhome" element={<CustomerHomePage />} /> */}
        <Route path="customerhome" element={<CustomerHomePage />} />
        <Route path="/serviceHome" element={<ServiceCenterHomePage />} />
        <Route path="/adminHome" element={<AdminHomePage />} />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="/customerhome/bookAppointment"
          element={<BookAppointment />}
        />
        <Route path="/customerhome/rate" element={<Rating />} />
        <Route path="customerhome/vehdetails" element={<VehDetails />} />
        <Route
          path="/customerhome/viewScLogin"
          element={<ViewServiceCenters />}
        />
        <Route
          path="/customerhome/serviceprogress"
          element={<TrackProcess />}
        />
      </Routes>
    </div>
  );
}

export default App;
