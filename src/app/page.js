"use client"
import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Social from "./components/Social";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <div className="main-wrapper"> 
        <Social /> 
        <div className="content-area"> 
          <Navbar />        
          <Hero />
          <Projects />
        </div>
      </div>

      <Footer />
    </>
  )
}