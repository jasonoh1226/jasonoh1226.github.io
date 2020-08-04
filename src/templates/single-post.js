import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Badge, Card, CardBody, CardTitle, CardSubtitle, CardText, Row, Col } from "reactstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RightSidebar from "../components/right-sidebar"
import { Slugify } from "../util/slugify"

const SinglePost = ({ data }) => {
  const post = data.markdownRemark.frontmatter

  return (
    <Layout>
      <SEO title={post.title} />
      <Row>
        <Col lg="8">
          <Card>
            <figure>
              <Img
                className="card-image-top"
                fluid={post.featuredImage.childImageSharp.fluid}
              />
            </figure>
            <CardBody>
              <CardSubtitle>
                <span className="text-info">{post.date}</span>
                {` `}
                <span>
                <ul className="post-categories">
                    {post.categories.map((category, index) => (
                       <li key={index}>
                        <Link to={`/categories/${Slugify(category)}`}>
                          <Badge color="light">{category}</Badge>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </span> 
              </CardSubtitle>
              <CardTitle><h2>{post.title}</h2></CardTitle>
              <CardText>
                <span
                    dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
                  />
              </CardText>
              <ul className="post-tags">
                  {post.tags.map((tag, index) => (
                    <li key={index}>
                      <Link to={`/tags/${Slugify(tag)}`}>
                        <Badge color="light">{tag}</Badge>
                      </Link>
                    </li>
                  ))}
                </ul>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4">
          <RightSidebar />
        </Col>
      </Row>
    </Layout>
    // <Layout>
    //   <SEO title={post.title} />
    //   <Row>
    //     <Col md="8">
    //       <section className="post-grid">
    //         <div className="post-grid-container">
    //           <figure>
    //             <Img
    //               className="card-image-top"
    //               fluid={post.featuredImage.childImageSharp.fluid}
    //             />
    //           </figure>

    //           <div className="post-container">
    //             <div className="date-category">
    //               {post.date}
    //               {` `}
    //               <ul className="post-categories">
    //                 {post.categories.map((category, index) => (
    //                   <li key={index}>
    //                     <Link to={`/categories/${Slugify(category)}`}>
    //                       <Badge color="light">{category}</Badge>
    //                     </Link>
    //                   </li>
    //                 ))}
    //               </ul>
    //             </div>
    //             <h3 className="title">{post.title}</h3>
    //             <div
    //               dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
    //             />
    //           </div>
    //           <ul className="post-tags">
    //             {post.tags.map((tag, index) => (
    //               <li key={index}>
    //                 <Link to={`/tags/${Slugify(tag)}`}>
    //                   <Badge color="dark">{tag}</Badge>
    //                 </Link>
    //               </li>
    //             ))}
    //           </ul>
    //         </div>
    //       </section>
    //     </Col>
    //     <Col md="4">
    //       <RightSidebar />
    //     </Col>
    //   </Row>
    // </Layout>
  )
}

// It retruns data in props
export const query = graphql`
  query blogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        categories
        date(formatString: "MMMM Do, YYYY")
        tags
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 700 maxHeight: 340) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default SinglePost
