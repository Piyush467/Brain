import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import ITServices from "./page/ITServices";
import Healthcare from "./page/Healthcare";
import Pricing from "./page/Pricing";
import Resources from "./page/Resources";
import ComingSoon from "./components/Coming";
import CioLandingPage from "./page/Os";
import BlogIndex from "./page/BlogIndex";
import HealthcareCIOConsulting from "./page/blog/HealthcareCIOConsulting";
import CIOStrategyConsulting from "./page/blog/CIOStrategyConsulting";
import CIOAdvisoryFirm from "./page/blog/CIOAdvisoryFirm";
import WhatIsCIOAdvisory from "./page/blog/WhatIsCIOAdvisory";
import WhatIsCIOasAService from "./page/blog/WhatIsCIOasAService";
import HowHealthPlansUseITHealthChecks from "./page/blog/HowHealthPlansUseITHealthChecks";
import HealthcareCIOOperatingModel from "./page/blog/HealthcareCIOOperatingModel";
import InterimCIOHealthPlans from "./page/blog/InterimCIOHealthPlans";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coming" element={<ComingSoon />} />
        <Route path="/about" element={<About />} />
        <Route path="/ITservices" element={<ITServices />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/cio-operating" element={<CioLandingPage />} />
        <Route path="/insights" element={<BlogIndex />} />
        <Route path="/insights/healthcare-cio-consulting" element={<HealthcareCIOConsulting />} />
        <Route path="/insights/cio-strategy-consulting" element={<CIOStrategyConsulting />} />
        <Route path="/insights/cio-advisory-firm" element={<CIOAdvisoryFirm />} />
        <Route path="/insights/what-is-healthcare-cio-advisory" element={<WhatIsCIOAdvisory />} />
        <Route path="/insights/what-is-cio-as-a-service" element={<WhatIsCIOasAService />} />
        <Route path="/insights/how-health-plans-use-it-health-checks" element={<HowHealthPlansUseITHealthChecks />} />
        <Route path="/insights/healthcare-cio-operating-model" element={<HealthcareCIOOperatingModel />} />
        <Route path="/insights/interim-cio-health-plans" element={<InterimCIOHealthPlans />} />
      </Routes>
    </Router>
  );
};

export default App;
