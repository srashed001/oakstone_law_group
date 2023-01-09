import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./styles.css";
import Homepage from "../Homepage/Homepage";
import About from "../about/About";
import Services from "../services/Services";
import ContactHome from "../contact/ContactHome";
import ResourcesHome from "../resources/ResourcesHome";

function PublicRoutes() {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeOut");

  useEffect(() => {
    window.scrollTo(0, 0);

    if (location !== displayLocation) setTransitionStage("fadeOut");
  }, [location, displayLocation]);
  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransitionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/services"} element={<Services />} />
        <Route path={"/contact"} element={<ContactHome />} />
        <Route path="/resources" element={<ResourcesHome/>} />
      </Routes>
    </div>
  );
}

export default PublicRoutes;
