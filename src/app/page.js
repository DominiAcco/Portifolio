"use client"
import React from "react"
import Link from "next/link"
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <><header className="main-header">
      <aside className="sidebar">
        <div className="social-links">
          <FaLinkedinIn className="icon-link" />
          <FaGithub className="icon-link" />
          <MdEmail className="icon-link" />
        </div>
      </aside>

      <div className="main-content">
        <nav className="navbar">
          <ul className="links_nav">
            <li className="active-link">
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/projetos">Meus Projetos</Link>
            </li>
          </ul>
        </nav>

        <section className="intro-section">
          <div className="text-container">
            <h1 className="name">
              Domini <span className="accent-color">Acco</span>
            </h1>
            <p className="description">
              "Desenvolvedor com experiência em aplicações web, focado em criar soluções
              eficientes, organizadas e funcionais"
            </p>
          </div>

          <div className="photo-container">
            <img
              src="/Acco_lindo.png"
              alt="Foto de Perfil"
              className="profile-photo" />
          </div>
        </section>
      </div>
    </header>
      <footer>
        <div className="footer-container">
          {/* COLUNA 1: Logo e Copyright */}
          <div className="footer-col footer-col-info">
            <h2 className="name footer-logo">
              Domini<span className="accent-color">Acco</span>
            </h2>
            <p className="copyright">Copywriter 2025</p>
          </div>

          {/* COLUNA 2: Texto Central */}
          <div className="footer-col footer-col-center">
            <p>Lorem ipsum dolor sit amet,</p>
          </div>

          {/* COLUNA 3: Contatos */}
          <div className="footer-col footer-col-contact">
            <h4>Contato</h4>

            {/* Item de Contato 1 (Email) */}
            <div className="contact-item">
              <MdEmail className="contact-icon" />
              <a href="mailto:dominiacco@gmail.com">dominiacco@gmail.com</a>
            </div>

            {/* Item de Contato 2 (GitHub/Gato) */}
            <div className="contact-item">
              <FaGithub className="contact-icon" />
              <a href="#">DominiAcco</a>
            </div>

            {/* Item de Contato 3 (LinkedIn) */}
            <div className="contact-item">
              <FaLinkedinIn className="contact-icon" />
              <a href="#">Domini Acco</a>
            </div>
          </div>
        </div>
      </footer></>
  )
}