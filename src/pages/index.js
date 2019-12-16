import React from "react";
import { Link, graphql } from "gatsby";

<<<<<<< HEAD
// import Bio from "../components/bio"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
// import Button from "../components/button"

class Blog extends React.Component {
  render() {
    const siteTitle = "Signalog"
    const { data } = this.props
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <div style={{ margin: "20px 0 40px" }}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link
                    style={{ boxShadow: `none` }}
                    to={`blog${node.fields.slug}`}
                  >
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
            )
          })}
        </div>
=======
import Layout from "../components/Layout/layout";
import Img from "gatsby-image"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    // const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location}>
        <main>
          <div class="posts--top posts">
            <div class="posts__list">
              {posts.map(({ node }, index, array) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <section class="posts__item" key={node.fields.slug}>
                    <Link to={`blog${node.fields.slug}`} target="_blank">
                      <Img fluid={node.frontmatter.thumbnail.childImageSharp.fluid} />
                      <div class="posts__info">
                        <div class="posts__time">{node.frontmatter.date}</div>
                        <div class="posts__tag">ENGLISH</div>
                      </div>
                      <h3 class="posts__title">{title}</h3>
                    </Link>
                  </section>
                )
                // }
              })}
            </div>
          </div>
        </main>
>>>>>>> develop
      </Layout>
    )
  }
}

export default Blog
<<<<<<< HEAD

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
=======
export const pageQuery = graphql`
  query {
          site {
          siteMetadata {
          title
        }
        }
    allMdx(sort: {fields: [frontmatter___date], order: DESC }) {
          edges {
          node {
          excerpt
          fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY/MM/DD")
          title
          description
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
}
}
}
}
}
>>>>>>> develop
`
