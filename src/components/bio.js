import React from "react"
import {Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

//import ProfileImg from "../../static/images/rychillie.webp"

export default () => {
    const data = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "rychillie.webp" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `)
    return (
        <div className={"bio"}>
            <div className={"container"}>
                <div className={"apresentation row"}>
                    <div className={"col-4 profile"}>
                        <div className={"avatar"}>
                            <Img
                                fluid={data.file.childImageSharp.fluid}
                                alt="Rychillie"
                            />
                        </div>
                    </div>
                    <div className={"col-8 hometext"}>
                        <h2>
                            Olá, Eu sou <span>Rychillie</span>
                        </h2>
                        <p>Um jovem Programador Front-End querendo compartilhar seu conhecimento. Sempre buscando evoluir e melhorar em todos os aspectos. Venha <Link to="/about" title={"About"}>me Conhecer</Link> um pouco mais e o <Link to="/portfolio" title={"Portfolio"}>meu trabalho</Link>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
