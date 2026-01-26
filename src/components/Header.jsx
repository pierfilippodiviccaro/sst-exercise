
import { NavLink } from "react-router-dom";


export default function Header() {
  const navlinks = [
    { title: "Home", path: "/" },
    { title: "viaggi", path: "/viaggi" },
    { title: "Contattaci", path: "/contattaci" }
  ]
  return (
    <>
      <header className="fixed-top">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <NavLink className="navbar-brand" to="/">
              ritorna alla home
              </NavLink>
              <div className="collapse navbar-collapse" id="navbarNav">
                
                
                
                
              </div>  
         </div>
      </nav>
      </header>


    </>
  
  )
}
