import React from "react";
import { Link, graphql } from "gatsby";

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
          <div class="post--top post">
            <div class="post__list">
              {posts.map(({ node }, index, array) => {
                const title = node.frontmatter.title || node.fields.slug
                if (index === 0) {
                  return (
                    <section class="post__new" key={node.fields.slug}>
                      <Link to={`blog${node.fields.slug}`} target="_blank">
                        <Img fluid={node.frontmatter.thumbnail.childImageSharp.fluid} />
                        <div class="post__info">
                          <div class="post__time">{node.frontmatter.date}</div>
                          <div class="post__category">ENGLISH</div>
                        </div>
                        <h3 class="post__title">{title}</h3>
                      </Link>
                    </section>
                  )
                } else {
                  return (
                    <section class="post__item" key={node.fields.slug}>
                      <Link to={`blog${node.fields.slug}`} target="_blank">
                        <Img fluid={node.frontmatter.thumbnail.childImageSharp.fluid} />
                        <div class="post__info">
                          <div class="post__time">{node.frontmatter.date}</div>
                          <div class="post__category">ENGLISH</div>
                        </div>
                        <h3 class="post__title">{title}</h3>
                      </Link>
                    </section>
                  )
                }
              })}
            </div>
          </div>
        </main>
      </Layout>
    )
  }
}

export default Blog

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
          date(formatString: "MMMM DD, YYYY")
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
`
