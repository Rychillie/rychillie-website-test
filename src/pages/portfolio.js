import React from "react"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
        <SEO title="Portfolio | Rychillie {'\ud83e\udd84'}"/>
      <div className={"blogpost"}>
        <h3 className={"titulo"}>{post.frontmatter.title}</h3>
        <img alt={post.frontmatter.title} className={"imagepost"} src={post.frontmatter.image}></img>
        <p className={"categorydate"}>{post.frontmatter.categories} — {post.frontmatter.date}</p>
        <div className={"article"} dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
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
