// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
// import './App.css';
import Home from "./Components/Homepage/home";
import Login from "./Components/LoginFolder/LoginPage";
import CustRegistration from "./Components/Register/CustRegistration";
import ServRegistration from "./Components/Register/ServRegistration";
import ContactUs from "./Components/Homepage/ContactUs";
import AdminHome from "./Components/UseCases/AdminHome";
import CustomerHomePage from "./Components/Homepage/CustomerHomePage";
import ServiceCenterHomePage from "./Components/Homepage/ServiceCenterHome";
import Logout from "./Components/Logout";
import VehDetails from "./Components/UseCases/VehDetails";
import VehRegistration from "./Components/Register/VehRegistration";
import Booking from "./Components/UseCases/Booking";
import BookAppointment from "./Components/UseCases/BookAppointment";
import Rating from "./Components/UseCases/Rating";
import CreatePackages from "./Components/UseCases/CreatePackages";

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
        {/* <Route path="/serviceHome" element={<ServiceCenterHomePage />} /> */}

        <Route path="/logout" element={<Logout />} />
        <Route path="/vehdetails" element={<VehDetails />}></Route>
        <Route path="/adminHome" element={<AdminHome />} />

        {/* ---------------------------------- Customer ----------------------------------*/}
        <Route path="customerhome" element={<CustomerHomePage />}>
          <Route path="vehdetails" element={<VehDetails />}></Route>

          <Route path="registervehicle" element={<VehRegistration />}></Route>

          <Route path="bookAppointment" element={<BookAppointment />}></Route>

          <Route path="viewScLogin" element={<Booking />}></Route>

          <Route path="rate" element={<Rating />}></Route>
        </Route>
        {/* ---------------------------------- Customer ----------------------------------*/}

        {/* ---------------------------------- Service Center ----------------------------------*/}
        { <Route path="serviceHome" element={<ServiceCenterHomePage />}>
            
            
        <Route path="viewScLogin" element={<CreatePackages />}></Route>

              </Route> }
        {/* ---------------------------------- Service Center ----------------------------------*/}

        <Route path="viewScLogin" element={<CreatePackages />}></Route>
      </Routes>
    </div>
  );
}

export default App;
