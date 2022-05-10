import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import signature from "../images/feijo-logo.svg"

const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            @include
            <img src={signature} alt="feijó logo with a signature"></img>
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#work")}>Projetos</button>
            <button onClick={() => scrollTo("#about")}>Sobre</button>
            <button onClick={() => scrollTo("#contact")}>Contato</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
