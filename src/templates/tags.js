import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/Layout/layout"
import Img from "gatsby-image"
import Seo from '../components/Seo/seo'

import { Link, graphql } from "gatsby"
const Tags = ({ pageContext, data }) => {
    const { tag } = pageContext
    const { edges } = data.allMdx
    return (
        <Layout>
            <Seo title={tag}></Seo>
            <h1 className="page-title category__title">{tag}</h1>
            <div className="posts">
                <div className="posts__list">
                    {edges.map(({ node }) => {
                        const { slug } = node.frontmatter
                        return (
                            <section className="posts__item" key={slug}>
                                <Link to={`blog${slug}`} target="_blank">
                                    <Img fluid={node.frontmatter.thumbnail.childImageSharp.fluid} />
                                    <div className="posts__info">
                                        <div className="posts__time">{node.frontmatter.date}</div>
                                        <div className="posts__tag">{node.frontmatter.tags}</div>
                                    </div>
                                    <h3 className="posts__title">{node.frontmatter.title}</h3>
                                </Link>
                            </section>
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}

Tags.propTypes = {
    pageContext: PropTypes.shape({
        tag: PropTypes.string.isRequired,
    }),
    data: PropTypes.shape({
        allMdx: PropTypes.shape({
            totalCount: PropTypes.number.isRequired,
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        frontmatter: PropTypes.shape({
                            title: PropTypes.string.isRequired,
                            tags: PropTypes.string.isRequired,
                            description: PropTypes.string.isRequired,
                            slug: PropTypes.string.isRequired,
                        }),
                    }),
                }).isRequired
            ),
        }),
    }),
}

export default Tags
export const pageQuery = graphql`
  query($tag: String) {
          allMdx(
              limit: 2000
              sort: {fields: [frontmatter___date], order: DESC, }
              filter: { frontmatter: { tags: { in: [$tag] } } }
              ) {
      totalCount
      edges {
        node {
          frontmatter {
            date(formatString: "YYYY/MM/DD")
            title
            description
            tags
            slug
          }
        }
      }
    }
  }
`