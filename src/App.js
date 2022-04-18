import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import { Cards } from "./Components/Cards/Cards";
import Enquiry from "./Components/Enquiry/Enquiry"
function App() {
  return (
    <div>
        <Header />
        <Hero />
        <Cards />
        <Enquiry />
        <Footer />
    </div>
  );
}

export default App;
