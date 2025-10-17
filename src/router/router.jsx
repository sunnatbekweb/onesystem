import App from "../App";
import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ServicePage from "../pages/ServicesPage/ServicesPage";
import DevelopmentPage from "../pages/DevelopmentPage/DevelopmentPage";
import MarketingPage from "../pages/MarketingPage/MarketingPage";
import ContactusPage from "../pages/ContactusPage/ContactusPage";
import NotFoundSection from "../ui/NotFoundSection";
import ProgressBar from "../ui/ProgressBar";
const Router = () => {
  const [isLoading, setIsLoading] = useState(true);
  const path = useLocation();
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [path.pathname]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <App
              bar={isLoading ? <ProgressBar isLoading={isLoading} /> : null}
            />
          }
        >
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/development" element={<DevelopmentPage />} />
          <Route path="/portfolio" element={<MarketingPage />} />
          <Route path="/contactus" element={<ContactusPage />} />
        </Route>
        <Route path="*" element={<NotFoundSection />} />
      </Routes>
    </>
  );
};
export default Router;
