import React from "react";
import { Route, Routes } from "react-router-dom";
import { Error } from "./Error";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Contact } from "./pages/contact/contact";
import { Product } from "./pages/product/product";
import { Navigation } from "./layouts/Navigation";
import { Footer } from "./layouts/Footer";
import { Panier } from "./pages/panier/panier";
import { Coeur } from "./pages/coeur/coeur";

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/coeur" element={<Coeur />} />
      </Routes>
      <Footer/>

    </>
  );
};
