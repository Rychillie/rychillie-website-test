import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"

//import iconSearch from "../../static/images/Search-Icon.svg"
import ProfileImg from "../../static/images/rychillie.webp"

const Header = ({siteTitle}) => (
    <header>
        <div className={"container"}>
            <div className={"row top-menu"}>
                <div className={"col-10-sm col-8 title"}>
                    <Link to="/" title={siteTitle} className={"title"}>Title</Link>
                </div>

                <nav className={"col-2-sm col-4 nav-top"}>
                    <input id="menu-hamburguer" type="checkbox"></input>

                    <label htmlFor="menu-hamburguer">
                        <div className={"menu"}>
                            <span className={"hamburguer"}></span>
                        </div>
                    </label>

                    <ul>
                        <li>
                            <Link to="/blog" title={"Blog"}>Blog</Link>
                        </li>
                        <li>
                            <Link to="/portfolio" title={"Portfolio"}>Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/about" title={"About"}>About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

        <div className={"apresentation"}>
            <div className={"profile"}>
                <img src={ProfileImg} alt="Rychillie" srcset="Rychillie"/>
            </div>
            <div className={"hometext"}>
                <h2>
                    Olá, Eu sou <span>Rychillie</span>
                </h2>
                <p>Um jovem Programador Front-End querendo compartilhar seu conhecimento. Sempre buscando evoluir e melhorar em todos os aspectos. Venha <Link to="/about" title={"About"}>me Conhecer</Link> um pouco mais e o <Link to="/portfolio" title={"Portfolio"}>meu trabalho</Link>.</p>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

export default Header
