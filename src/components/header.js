import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({siteTitle}) => (
    <header>
        <div className={"container"}>
            <div className={"row top-menu"}>
                <div className={"col-6-sm title"}>
                    <Link to="/" title={siteTitle} className={"title"}>Rychillie</Link>
                </div>

                <nav className={"col-5-sm nav-top"}>
                    <ul>
                        <li>
                            <Link to="/portfolio" title={"Portfolio"}>Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/about" title={"Sobre"}>Sobre</Link>
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
