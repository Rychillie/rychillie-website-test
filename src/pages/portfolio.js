import React from "react"

import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PortfolioPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Portfolio | Rychillie {'\ud83e\udd84'}"/>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id} className={"post"}>
            <Link to={node.fields.slug}>
              <div className={"content"}>
                <div className={"imgpost"}>
                  <img alt={node.frontmatter.title} className={"imagepost"} src={node.frontmatter.image}></img>
                </div>
                <div className={"descrition"}>
                  <span className={"categorypost"}>{node.frontmatter.categories}</span>
                  <h3 className={"titlepost"}>{node.frontmatter.title}</h3>
                  <span className={"datepost"}>{node.frontmatter.date}</span>
                </div>
              </div>
            </Link>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`{
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {categories: {eq: "Portfolio"}}}) {
      edges {
        node {
          id
          frontmatter {
            id: title
            title
            categories
            image
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default PortfolioPage
