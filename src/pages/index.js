import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/home"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
    const post = data.markdownRemark

    return (

    <Layout>
        <SEO title="Rychillie, a Brazilian Front-End Developer"/>

        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className={"post row"}>
              <Link to={node.fields.slug}>
                <div className={"img"}>
                  <img loading="lazy" alt={node.frontmatter.title} className={"imagepost"} src={node.frontmatter.image}></img>
                </div>
                <div className={"content"}>
                  <h3 className={"titlepost"}>{node.frontmatter.title}</h3>
                  <span className={"categorydate"}>{node.frontmatter.category} — {node.frontmatter.date}</span>
                </div>
              </Link>
          </div>
        ))}
    </Layout>
)}

export const pageQuery = graphql`{
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
    edges {
      node {
        id
        frontmatter {
          id: title
          title
          category
          image
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
