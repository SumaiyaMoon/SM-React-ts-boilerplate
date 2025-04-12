import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SMLogin from "../../components/SMLayouts/SMLogin";
import SMSignUp from "../../components/SMLayouts/SMSignUp";
import Home from "../../pages/SMHome";
import NotFound from "../../pages/SMNotFound";
import Profile from "../../pages/Profile";
import DonorDetail from "../../pages/DonorDetail";
import Protected from "../../components/SMLayouts/SMProtected";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          {/* Public Routes
          <Route path="/" element={<Home />} /> */}

          <Route path="/login" element={<SMLogin />} />
          <Route path="/signup" element={<SMSignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/profile" element={<Protected Screen={Profile} />} />
          <Route path="/profile/:id" element={<DonorDetail />} />
          {/* Protected Routes
          <Route
            path="admindashboard/*"
            element={<Protected Screen={AdminDashboard} />}
          /> */}
        </Routes>
      </Router>
    </>
  );
}
