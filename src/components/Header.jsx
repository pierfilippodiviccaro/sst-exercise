
import { NavLink } from "react-router-dom";

export default function Header() {
  const links = [
    { title: "Home", path: "/" },
    { title: "Viaggi", path: "/viaggi" }
  ]

  return (
    <>

      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">miao corporation</NavLink>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                {links.map((link, index) => {
                  return (
                    <>
                      <li className="nav-item"key={index}>
                        <NavLink className="nav-link" to={link.path}>{link.title}</NavLink>
                      </li>

                    </>
                  )
                })}

              </ul>
            </div>
          </div>
        </nav>
      </header>

    </>

  )
}
