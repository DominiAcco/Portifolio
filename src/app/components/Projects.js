// components/Projects.js

import React from 'react';

// Dados de exemplo baseados na sua imagem
const projectData = [
    {
        title: "Meus Projetos",
        tagline: '"Projeto web desenvolvido com foco em usabilidade e design responsivo, integrando funcionalidades modernas para oferecer uma experiência intuitiva ao usuário."',
        image: '/site_web.jpg', // Substitua pelo caminho real da imagem do projeto web
        isWeb: true
    },
    {
        title: "Meus Projetos", // Mantendo o título no mesmo lugar para a estrutura
        tagline: '"Aplicativo mobile desenvolvido com foco em performance e experiência do usuário, oferecendo navegação simples, design responsivo e funcionalidades práticas para o dia a dia."',
        image: '/mobile.jpg', // Substitua pelo caminho real da imagem do projeto mobile
    }
];

export default function Projects() {
    return (
        <section id="projetos" className="projects-section">
            <div className="projects-title-wrapper">
                <h2 className="projects-main-title">Meus <span className="accent-color">Projetos</span></h2>
            </div>

            <div className="carousel-container">
                {projectData.map((project, index) => (
                    // 1. O card principal
                    <div key={index} className="project-card">

                        {/* 2. O container Flex que fará o layout lateral */}
                        <div className="project-details">

                            {/* 3. Container para o Texto e Botão */}
                            <div className="project-text-content">
                                <p className="project-tagline">{project.tagline}</p>
                                <button className="project-button">Mais Informações</button>
                            </div>

                            {/* 4. Container para a Imagem */}
                            <div className="project-image-container">
                                <img
                                    src={project.image}
                                    alt={`Imagem do projeto ${project.title}`}
                                    className="project-image"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}