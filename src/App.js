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
import { Switch, Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
    
      <GlobalStyle />
      <Nav />
      
      <Routes>
      <Route path="/" element={<AboutUs />}/>
      <Route exact path="/contactUs" element={<ContactUs />}/>
      <Route exact path="/work" element={<OurWork />}/>
      <Route path="/work/:id" element={<MovieDetails />}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
