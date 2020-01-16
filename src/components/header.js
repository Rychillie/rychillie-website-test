import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({siteTitle}) => (
    <header>
        <div className={"container"}>
            <div className={"row top-menu"}>
                <div className={"col-5-sm col-7 title"}>
                    <Link to="/" title={siteTitle} className={"title"}>Rychillie</Link>
                </div>

                <nav className={"col-7-sm col-5 nav-top"}>
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
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

export default Header
