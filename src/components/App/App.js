import React from "react";
import './App.css';
import Header from "../Header/Header";
import AboutUs from "../AboutUs/AboutUs";
import OurTeam from "../OurTeam/OurTeam";
import Specialties from "../Specialties/Specialties";
import Booking from "../Booking/Booking";
import PrivateEvents from "../PrivateEvents/PrivateEvents";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import Contact from "../Contact/Contact";


function App() {
    return (
        <div className="App">
            <Header/>
            <AboutUs/>
            <OurTeam/>
            <Booking/>
            <Specialties/>
            <Menu/>
            <PrivateEvents/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
