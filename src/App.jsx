// App.jsx — Root component
// Imports all sections; add/remove sections here easily

import { useState } from "react";
import "./styles/global.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Results from "./components/Results";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";


import { Helmet } from "react-helmet-async";

export default function App() {
  const [active, setActive] = useState("Home");
  const [selectedPost, setSelectedPost] = useState(null);

  if (selectedPost) {
    return <BlogPost slug={selectedPost} onBack={() => setSelectedPost(null)} />;
  }


  return (
    <>
      <Navbar active={active} setActive={setActive} />
      <Hero />
      <Services />
      <HowItWorks />
      <WhyUs />
      <Blog onSelectPost={setSelectedPost} />

      <Results />
      <Contact />
      <Footer />
    </>
  );
}
