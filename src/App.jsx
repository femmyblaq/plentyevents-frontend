import React, { useEffect, useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
//New Home
import NewHome from "./Pages/NewHome";
//React Router
//Homepages
import Navbar from "./components/Navbar";
import "./App.css";
import Sectionone from "./components/Sectionone";
import Footer from "./components/Footer";
import VendorGrid from "./components/VendorGrid";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import HelpCenter from "./components/HelpCenter";
import HowItWorks from "./components/HowItWorks";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";

//Protected Route
import ProtectedRoute from "./components/ProtectedRoute";

//Registration Pages
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
import ForgetPassword from "./Pages/Auth/ForgetPassword.jsx";

//Dashboard(Vendor)
import VendorDashboard from "./Pages/VendorDashboard";

//New Vendor Dashboard
import Dashboard from './Pages/Vendor/Dashboard.jsx'
import Overview from './Pages/Vendor/Overview.jsx'
import Profile from './Pages/Vendor/Profile.jsx'
import NeedHelp from './Pages/NeedHelp'
import Waiters from "./Pages/Vendor/Waiters.jsx";

//New Worker Dashboard
import WaiterDashboard from "./Pages/Waiter/WaiterDashboard.jsx";
import WorkerOverview from "./Pages/Waiter/WaiterOverview.jsx";
import WaiterProfile from "./Pages/Waiter/WaiterProfile.jsx";
import AvailableHires from "./Pages/Waiter/AvailableHires.jsx";
import RatingsReviews from "./Pages/Waiter/RatingsReviews.jsx";


//Not Found Page
import NotFound from "./Pages/NotFound.jsx";

//Others
import RegisterChoice from "./components/RegisterChoice";
import WorkerDashboard from "./Pages/WorkerDashboard";
import VendorRegister from "./Pages/VendorRegister";
import Register from "./Pages/Auth/Register.jsx";
import { AuthContext } from "./store/AuthContext.jsx";




// Home Page Component
function HomePage() {
  return (
    <>
      <Navbar />
      <div className="hero-section">
        <VendorGrid />
        <div className="overlay-content">
          <h1>
            CONNECT WITH WAITERS
            <br />
            ALL AROUND YOU, <span>PLATFORM</span>
            <br />
            WHERE WAITERS LIVES!
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="buttons">
            <Link to="/vendor-register" className="btn btn-dark">
              Join as a Vendor →
            </Link>
            <Link to="/create-account" className="btn btn-light">
              Join as a Waiter →
            </Link>
          </div>
        </div>
      </div>
      <Sectionone />
      <Footer />
    </>
  );
}

function App() {
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflowY = "auto";
  }, [location.pathname]);

  return (
    <Routes>
      // New Home Route
      <Route path="/" element={<NewHome />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/vendor-register" element={<VendorRegister />} />

      // Vendor Dashboard
      
        <Route element={<ProtectedRoute allowedRole="vendor" />}>
          <Route path="/vendor/dashboard" element={<Dashboard />}>
            <Route index element={<Overview />} />
            <Route path="overview" element={<Overview />} />
            <Route path="profile" element={<Profile />} />
            <Route path="need_help" element={<NeedHelp />} />
            <Route path="waiters" element={<Waiters />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>

// Worker Dashboard
        <Route element={<ProtectedRoute allowedRole="waiter" />}>
          <Route path="/worker/dashboard" element={<WaiterDashboard />}>
            <Route index element={<WorkerOverview />} />
            <Route path="overview" element={<WorkerOverview />} />
            <Route path="profile" element={<WaiterProfile />} />
            <Route path="need_help" element={<NeedHelp />} />
            <Route path="available-hires" element={<AvailableHires />} />
            <Route path="ratings-reviews" element={<RatingsReviews />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      
      // Auth and Other Routes



      <Route path="/register-choice" element={<RegisterChoice />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/help-center" element={<HelpCenter />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/register" element={<Register />} />




      {/* ✅ Protected dashboards */}
      <Route
        path="/vendor-dashboard"
        element={
          <ProtectedRoute isAuthenticated={true}>
            <VendorDashboard />
          </ProtectedRoute>
        }
      />
      //Not Found Page
      <Route path="*" element={<NotFound />} />
    </Routes>


  );
}

export default App;
