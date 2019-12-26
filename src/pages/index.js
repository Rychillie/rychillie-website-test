import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import featureImage from "../../static/images/intro.gif" 
import featureVideo from "../../static/images/cheetah.mp4" 

import thumbnailEvent from "../../static/images/feature-event.png"
import thumbnailBoard from "../../static/images/feature-board.png"
import thumbnailNews from "../../static/images/feature-news.png"
import thumbnailTeams from "../../static/images/feature-team.png"
import thumbnailStaff from "../../static/images/feature-user.png"

var videoStyle = {
  width: '100%'
};

const IndexPage = () => (
    <Layout>
        <SEO title="Open-Source Gatsby Starter with SCSS Styling"/>

        <div className={"page-header home"}>
            <h1><a href="https://www.gatsbyjs.org/">GatsbyJS</a> SCSS Starter</h1>
            <p>
                Blazing fast <a href="https://github.com/app-generator/gatsby-starter-scss">open-source</a>  app, 
                built in GatsbyJS and styled in SCSS.
            </p>

            <br />

            <div className={"row"}>
                <div className={"col-2 first"}></div>
                <div className={"col-8"}>

                    <video style={videoStyle} playsinline muted loop="true" autoplay="autoplay" controls>
                        <source src={featureVideo} type="video/mp4" />
                    </video>                

                </div>
            </div>                    
        </div>

        <div className={"container"}>
            <div className={"features"}>
                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Event"} src={thumbnailEvent}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Open-Source</h2>
                                <p>
                                    Gatsby Starter, released under the MIt license, suitable for hobby or commercial projects. 
                                    <br />
                                    Grab the <a href="https://github.com/app-generator/gatsby-starter-scss">sources</a> and start coding.  
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Built in Gatsby</h2>
                                <p>
                                    Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps.
                                    Read the <a href="https://www.gatsbyjs.org/docs/">docs</a> or grab a <a href="https://www.gatsbyjs.org/starters/?v=2">starter</a> and code your magic.
                                </p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Board"} src={thumbnailBoard}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"News"} src={thumbnailNews}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Credits</h2>
                                <p>
                                    Coded on top of this <a href="https://github.com/histaff/website-static/">starter</a> {' '}
                                    by <a href="https://twitter.com/Sm0keDev">Sm0ke</a>.
                                    <br /> Video <a href="https://www.youtube.com/watch?v=8-9oFxYFODE">Formula E Car vs Cheetah</a> 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div className={"call-to-action"}>
            <div className={"container"}>
                <div className={"call-to-action__content"}>
                    <h2>Part of the open web</h2>
                    <p>Feel free to use this starter to code your future app.</p>
                </div>

                <div className={"button"}>
                    <a href="https://github.com/app-generator/gatsby-starter-scss">Get Source Code</a>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
