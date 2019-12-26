/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql, Link} from "gatsby"

import Header from "./header"
import "../../static/styles/main.scss"
import logo from "../../static/images/logo.png"
import iconTwitter from "../../static/images/icon-twitter.svg"
import iconLinkedin from "../../static/images/icon-linkedin.svg"
import iconGitHub from "../../static/images/icon-github.svg"
import iconInstagram from "../../static/images/icon-instagram.svg"

const Layout = ({children}) => (
    <StaticQuery query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `} render={data => (
        <>
            <Header siteTitle={data.site.siteMetadata.title}/>
            <main>{children}</main>
            <footer>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-5"}>
                            <div className={"widget__item"}>
                                <div className={"logo"}>
                                    <Link to="/" title={"Gatsby Starter"}>
                                        <img alt={"Logo"} src={logo}/>
                                    </Link>
                                </div>

                                <div className={"about"}>
                                    <p>Blazing fast app, coded in GatsbyJS and styled in SCSS.</p>
                                </div>
                            </div>
                        </div>

                        <div className={"col-2"}>
                            <div className={"widget__item"}>
                                <ul className={"links"}>
                                    <h4>Links</h4>
                                    <ul>
                                        <li><Link to="/about" title={"About Us"}>About Page</Link></li>
                                        <li><a href="https://github.com/app-generator/gatsby-starter-scss" title={"Gatsby Starter, source code"}>Sources</a></li>
                                    </ul>
                                </ul>
                            </div>
                        </div>

                        <div className={"col-3"}>
                            <div className={"widget__item"}>
                                <ul className={"links"}>
                                    <h4>Related</h4>
                                    <ul>
                                        <li><a href="https://appseed.us/apps/gatsbyjs" title={"More Gatsbyjs Apps"}>Gatsbyjs Apps</a></li>
                                        <li><a href="https://blog.appseed.us/gatsbyjs-is-fast-but-why/" title={"Blog Article - GatsbyJS is fast, but why?"}>Why Gatsby is Fast</a></li>
                                        <li><a href="https://blog.appseed.us/tag/gatsbyjs/" title={"Blog Articles related to Gatsby"}>Gatsbyjs Articles</a></li>
                                    </ul>
                                </ul>
                            </div>
                        </div>

                        <div className={"col-2"}>
                            <div className={"widget__item"}>
                                <div className={"social"}>
                                    <a href="https://github.com/app-generator/gatsby-starter-scss" title={"GitHub"}><img alt={"GitHub"} src={iconGitHub}/></a>
                                    <a href="https://twitter.com/Sm0keDev" title={"Twitter"}><img alt={"Twitter"} src={iconTwitter}/></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"copyright"}>
                        <p>License MIT</p>
                    </div>
                </div>
            </footer>
        </>
    )}/>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
