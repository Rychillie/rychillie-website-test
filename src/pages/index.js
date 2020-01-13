import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
    const post = data.markdownRemark

    return (

    <Layout>
        <SEO title="Rychillie, a Brazilian Front-End Developer"/>

        {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id} className={"post"}>
            <img alt={node.frontmatter.title}className={"imagepost"} src={node.frontmatter.image}></img>
            <Link to={node.fields.slug}><h3 className={"titlepost"}>{node.frontmatter.title}</h3></Link>
            <span className={"categorydate"}>{node.frontmatter.categories} — {node.frontmatter.date}</span>
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
