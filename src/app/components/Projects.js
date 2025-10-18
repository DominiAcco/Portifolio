// components/Projects.js

import React from 'react';

const projectData = [
    {
        title: "Meus Projetos",
        tagline: '"Projeto web desenvolvido com foco em usabilidade e design responsivo, integrando funcionalidades modernas para oferecer uma experiência intuitiva ao usuário."',
        image: '/site_web.jpg',
        isWeb: true
    },
    {
        title: "Meus Projetos",
        tagline: '"Aplicativo mobile desenvolvido com foco em performance e experiência do usuário, oferecendo navegação simples, design responsivo e funcionalidades práticas para o dia a dia."',
        image: '/mobile.jpg',
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
                    <div key={index} className="project-card">

                        <div className="project-details">

                            <div className="project-text-content">
                                <p className="project-tagline">{project.tagline}</p>
                                <button className="project-button">Mais Informações</button>
                            </div>

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