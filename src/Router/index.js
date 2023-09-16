import { Route, Routes } from "react-router-dom";
import ContactUsPage from "../pages/contactUsPage";
import WinnerWizard from "../pages/Line Up Wizard Winner Circle/index";
import Pricing from "../pages/Pricing";
import HomePage from "../pages/LineUpWizardDashboard/index"
import OurOptimizer from "../pages/LineUpWizardOptimizer/index";
const Router = () => {
  return (
    <Routes>
          <Route path="/our-optimizer" element={<OurOptimizer />} />
      <Route path="/winner-wizard" element={<WinnerWizard />} />
      <Route path="/Pricing" element={<Pricing />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};
export default Router;
