import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/Layout/layout"
import Seo from '../components/Seo/seo'
import Img from "gatsby-image"
import before from '../../content/assets/post_before.png'
import after from '../../content/assets/post_after.png'
import Profile from "../components/Profile/profile"



class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Seo title={post.frontmatter.title}></Seo>
        <div className="post">
          <Img fluid={post.frontmatter.thumbnail.childImageSharp.fluid} />
          <div className="post__info">
            <p className="post__date">{post.frontmatter.date}</p>
            <div className="post__tag">{post.frontmatter.tags}</div>
          </div>
          <h1 className="post__title">{post.frontmatter.title}
          </h1>
          <div className="post__content">
            <MDXRenderer>{post.body}</MDXRenderer>
          </div>
          <ul className="post__index">
            <li className="post__indexItem">
              {previous && (
                <Link to={`blog${previous.fields.slug}`} rel="prev">
                  <img src={before} alt="next" />{previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li className="post__indexItem">
              {next && (
                <Link to={`blog${next.fields.slug}`} rel="next">
                  {next.frontmatter.title}
                  <img src={after} alt="after" />
                </Link>
              )}
            </li>
          </ul>
          <Profile />
        </div>
      </Layout >
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
query ($slug: String!) {
  site {
    siteMetadata {
      title
      author
    }
  }
  mdx(fields: {slug: {eq: $slug}}) {
    id
    excerpt(pruneLength: 130)
    body
    frontmatter {
      title
      date(formatString: "dddd DD MMMM YYYY")
      description
      tags
      thumbnail {
        childImageSharp {
          fluid(maxWidth: 740, quality: 50) {
            src
            srcSet
            aspectRatio
            sizes
            base64
          }
        }
        publicURL
      }
    }
  }
  allMdx {
    nodes {
      fields {
        slug
      }
    }
  }
}
`
