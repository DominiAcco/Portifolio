import Link from "next/link"


export default function navbar() {
  return (
    < header className="main-header" >
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
      </div>
    </header>
  )
}