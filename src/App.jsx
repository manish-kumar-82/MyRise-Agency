// App.jsx — Root component
// Imports all sections; add/remove sections here easily

import { useState } from "react";
import "./styles/global.css";

import Navbar      from "./components/Navbar";
import Hero        from "./components/Hero";
import Services    from "./components/Services";
import HowItWorks  from "./components/HowItWorks";
import WhyUs       from "./components/WhyUs";
import Contact     from "./components/Contact";
import Footer      from "./components/Footer";
import Results from "./components/Results";

export default function App() {
  const [active, setActive] = useState("Home");

  return (
    <>
      <Navbar active={active} setActive={setActive} />
      <Hero />
      <Services />
      <HowItWorks />
      <WhyUs />
      <Results />
      <Contact />
      <Footer />
    </>
  );
}
