"use client"
import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Social from "./components/Social";

export default function Home() {
  return (

    <>
      <div>
        <Social />
        <div>
          <Navbar />        
          <Hero />
        </div>
      </div>

      <Footer />
    </>
  )
}