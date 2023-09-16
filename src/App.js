import React from "react";
import Router from "./Router";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import "./styles/styles.css"
import { useLocation } from "react-router-dom";
const App = () => {
  const location = useLocation()
  return (
    <>
      <div className={location.pathname === "/winner-wizard" || "/" || "/our-optimizer" ? "header-two" : "header-one"}>
        <Header />
      </div>

      <Router />
      <Footer />
    </>
  );
};

export default App;
