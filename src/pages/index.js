import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/home"
import SEO from "../components/seo"
import Footer from "../components/footer"

const IndexPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Rychillie, a Brazilian Front-End Developer"/>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Link className={"post"} key={node.id} to={node.fields.slug} title={node.frontmatter.title}>
          <div className={"content"}>
            <div className={"imgpost"}>
              <div className={"imagepost"}>
                <Img
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                  alt={node.frontmatter.title}
                />
              </div>
            </div>
            <div className={"descrition"}>
              <span className={"categorypost"}>{node.frontmatter.categories}</span>
              <h3 className={"titlepost"}>{node.frontmatter.title}</h3>
              <span className={"datepost"}>{node.frontmatter.date}</span>
            </div>
          </div>
        </Link>
      ))}
      <Footer />
    </Layout>
  )
}

export const pageQuery = graphql`{
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
    edges {
      node {
        id
        frontmatter {
          id: title
          title
          categories
          image {
            childImageSharp {
              fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
              }
            }
          }
          date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        }
        fields {
          slug
        }
        html
        timeToRead
      }
    }
  }
}
`

export default IndexPage
