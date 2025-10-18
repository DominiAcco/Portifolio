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
      {/* 1. Adicione a classe 'main-wrapper' aqui */}
      <div className="main-wrapper"> 
        <Social /> 
        {/* 2. Adicione a classe 'content-area' aqui para o conteúdo principal */}
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