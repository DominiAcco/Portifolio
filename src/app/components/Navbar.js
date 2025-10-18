import Link from "next/link"


export default function navbar() {
  return (
    < header className="main-header" >
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