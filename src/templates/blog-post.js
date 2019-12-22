import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/Layout/layout"
import Seo from '../components/Seo/seo'
import Img from "gatsby-image"
import before from '../../content/assets/post_before.png'
import after from '../../content/assets/post_after.png'
import profileImg from '../../content/assets/about_profile.jpeg';



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
          <div className="about__profile">
            <div className="about__profileImg"><img src={profileImg} alt="" /></div>
            <h2 className="about__name">MAYU</h2>
            <p className="about__profileDesc">バンクーバー在住、20歳。<br />高三の時に朝井リョウの「何者」を読んで社会人になるのが怖くなり、大学受験から逃亡。<br />高校を卒業し、特に目標もなくカナダに流れ着いて語学学校に半年通う。<br />その間に現地で仕事に就きたいと思うようになり、コーディングを始める。<br />一時帰国してからは、東京のWeb制作会社で1年間フロントエンドのバイトをしてました。<br />2019年の10月からバンクーバーに戻り、<a href="https://redacademy.com/vancouver/" target="_blank" rel="noopener noreferrer">RED Academy</a>でFull stack developmentの勉強中。<br />行き当たりばったりな人生ですが、割と楽しいです。</p>
          </div>
        </div>
      </Layout >
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 130)
      body
      frontmatter {
        title
        date(formatString: "YYYY/MM/DD")
        description
        tags
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 740) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
