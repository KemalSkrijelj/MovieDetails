import React from "react";
//Import styled from styled components
import GlobalStyle from "./components/GlobalStyle";
//import pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetails from "./pages/MovieDetails";
//RouterDOM
import { Switch, Route, Routes, useLocation } from "react-router";

import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation()

  return (
    <div className="App">
    
      <GlobalStyle />
      <Nav />
      <AnimatePresence >
      <Routes location={location} key={location.pathname}>
      <Route exact path="/" element={<AboutUs />}/>
      <Route exact path="/contactUs" element={<ContactUs />}/>
      <Route exact path="/work" element={<OurWork />}/>
      <Route path="/work/:id" element={<MovieDetails />}/>
      </Routes>
      </AnimatePresence>
      
      
    </div>
  );
}

export default App;
