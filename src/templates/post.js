import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.title} | Rychillie {'\ud83e\udd84'}</title>
      </Helmet>
      <div className={"blogpost"}>
        <h3 className={"titulo"}>{post.frontmatter.title}</h3>
        <img loading="lazy" alt={post.frontmatter.title} className={"imagepost"} src={post.frontmatter.image}></img>
        <p className={"categorydate"}>{post.frontmatter.categories} — {post.frontmatter.date}</p>
        <div className={"article"} dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        id: title
        title
        categories
        image
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
    }
  }
`
