import React from "react";
import './App.css';
import Header from "../Header/Header";
import AboutUs from "../AboutUs/AboutUs";
import OurTeam from "../OurTeam/OurTeam";
import Specialties from "../Specialties/Specialties";
import Booking from "../Booking/Booking";


function App() {
  return (
    <div className="App">
      <Header/>
        <AboutUs/>
        <OurTeam/>
        <Booking/>
      <Specialties/>
    </div>
  );
}

export default App;
