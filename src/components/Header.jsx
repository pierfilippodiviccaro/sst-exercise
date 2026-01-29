
import { NavLink } from "react-router-dom";

export default function Header() {
  const links = [
    { title: "Home", path: "/" },
  
  ]

  return (
    <>

      <header>
        <nav className="navbar navbar-expand-lg navbar-expan bg-body-tertiary">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/home">miao corporation</NavLink>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link">miao</NavLink>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </header>

    </>

  )
}
