import React, { useState, useEffect } from 'react';
import Link from "next/link"; // Mantendo o Link, embora você esteja usando <a> com href

// Define a partir de quantos pixels o navbar começa a se esconder
const HIDE_OFFSET = 100;

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    // 1. Se estiver rolando para cima (window.scrollY < lastScrollY) E já passou do topo (HIDE_OFFSET)
    if (window.scrollY < lastScrollY && window.scrollY > HIDE_OFFSET) {
      setIsVisible(true);
    }
    // 2. Se estiver rolando para baixo (window.scrollY > lastScrollY) E já passou do topo (HIDE_OFFSET)
    else if (window.scrollY > lastScrollY && window.scrollY > HIDE_OFFSET) {
      setIsVisible(false);
    }
    // 3. Se estiver no topo da página, sempre mostra
    else if (window.scrollY <= HIDE_OFFSET) {
      setIsVisible(true);
    }

    // Atualiza a última posição
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    // Adiciona o listener de scroll ao montar o componente
    window.addEventListener('scroll', handleScroll);

    // Função de limpeza: Remove o listener ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); // lastScrollY como dependência para que a função use o valor mais recente

  return (
    // Adiciona classes condicionais: 'navbar-visible' ou 'navbar-hidden'
    <header className={`main-header ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
      <div className="main-content">
        <nav className="navbar">
          <ul className="links_nav">
            <li className="active-link">
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#projetos">Meus Projetos</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}