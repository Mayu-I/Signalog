import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout/layout";
import Img from "gatsby-image";
import Seo from "../components/Seo/seo";

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location}>
        <Seo title="Home" />
        <div className="posts--top posts">
          <div className="posts__list">
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <section className="posts__item" key={node.fields.slug}>
                  <Link to={`blog${node.fields.slug}`} target="_blank">
                    <Img fluid={node.frontmatter.thumbnail.childImageSharp.fluid} />
                    <div className="posts__info">
                      <div className="posts__time">{node.frontmatter.date}</div>
                      <div className="posts__tag">{node.frontmatter.tags}</div>
                    </div>
                    <h3 className="posts__title">{title}</h3>
                  </Link>
                </section>
              )
            })}
          </div>
        </div>
      </Layout>
    )
  }
}

export default Blog
export const pageQuery = graphql`
query{
  site {
    siteMetadata {
      title
    }
  }
  allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
    edges {
      node {
        excerpt
        frontmatter {
          title
          date(formatString: "YYYY/MM/DD")
          description
          tags
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 500, quality: 50) {
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
        fields {
          slug
        }
      }
    }
  }
}
`