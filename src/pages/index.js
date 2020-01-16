import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/home"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Rychillie, a Brazilian Front-End Developer"/>
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

export const pageQuery = graphql`{
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
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
        html
        timeToRead
      }
    }
  }
}
`

export default IndexPage
