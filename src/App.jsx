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
   <Helmet>

<title>
MyRise Agency | Marketplace Review Growth Services for Amazon, Flipkart, Myntra & Meesho
</title>

<meta
name="description"
content="MyRise Agency helps brands grow on Amazon, Flipkart, Myntra and Meesho through marketplace review growth, listing optimization and ecommerce visibility services."
/>

<meta
name="keywords"
content="Flipkart Review Growth, Amazon Review Growth, Myntra Seller Growth, Meesho Seller Growth, Marketplace Growth Agency, Ecommerce Growth Services, Product Review Services"
/>

<meta name="robots" content="index, follow"/>

<link
rel="canonical"
href="https://myriseagency.in"
/>

<meta property="og:type" content="website"/>

<meta
property="og:title"
content="Marketplace Review Growth Services | MyRise Agency"
/>

<meta
property="og:description"
content="Helping ecommerce brands increase reviews, ratings and marketplace visibility."
/>

<meta
property="og:url"
content="https://myriseagency.in"
/>

<meta
property="og:image"
content="https://myriseagency.in/og-image.png"
/>

<meta
property="og:site_name"
content="MyRise Agency"
/>

<meta
name="twitter:card"
content="summary_large_image"
/>

<meta
name="twitter:title"
content="Marketplace Review Growth Services | MyRise Agency"
/>

<meta
name="twitter:description"
content="Helping brands increase ratings and reviews across marketplaces."
/>

<meta
name="twitter:image"
content="https://myriseagency.in/og-image.png"
/>

</Helmet>

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
