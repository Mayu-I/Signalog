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
`
