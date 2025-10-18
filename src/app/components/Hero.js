

export default function hero() {
    return (
        <body >
            <section id="home" className="intro-section">
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
        </body >
    )
}