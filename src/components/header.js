import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"

//import iconSearch from "../../static/images/Search-Icon.svg"

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
                        <div class="menu">
                            <span class="hamburguer"></span>
                        </div>
                    </label>

                    <ul>
                        <li>
                            <Link to="/blog" title={"Blog"}>Blog</Link>
                        </li>
                        <li>
                            <Link to="/blog" title={"Blog"}>Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/blog" title={"Blog"}>About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

export default Header
