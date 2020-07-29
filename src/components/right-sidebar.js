import React from "react"
import {
  Card,
  CardTitle,
  CardBody,
  Row,
  Col
} from "reactstrap"
import {graphql, useStaticQuery, Link} from 'gatsby'
import Img from 'gatsby-image'

const RightSidebar = () => {

    const recentPostQuery = useStaticQuery(
        graphql`
            query {
              allMarkdownRemark(
                  sort: {fields: [frontmatter___date], order: DESC} 
                  limit: 3
                ) {
                edges {
                  node {
                    id
                    frontmatter {
                      title
                      categories
                      date(formatString: "MMMM Do, YYYY")
                      featuredImage {
                        childImageSharp {
                          fixed (width: 100 height: 100 ) {
                            ...GatsbyImageSharpFixed
                          }
                        }
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
      ) 

  return (
    <div>
        <Card>
          <CardBody>
            <CardTitle className="mb-3">
                Recent Posts
            </CardTitle>
            <div>
                {recentPostQuery.allMarkdownRemark.edges.map((edge, index) => {
                    return (
                        <div className="recent-posts-container" key={index}>
                           <Link to={`/${edge.node.fields.slug}`}>
                            <Row>
                              
                                <Col xs="6">
                                  <figure>
                                    <Img  fixed={edge.node.frontmatter.featuredImage.childImageSharp.fixed} />
                                  </figure>
                                    
                                </Col>
                                <Col xs="6">
                                        <div className="recent-posts-date">
                                          {edge.node.frontmatter.date}
                                        </div>
                                        <div className="recent-posts-title">
                                            {edge.node.frontmatter.title}
                                        </div>
                                   
                                </Col>
                            </Row>
                                
                            </Link>
                        </div>
                    )
                })}
            </div>
            
          </CardBody>
      </Card>
      {/* <Card>
        <CardBody>
          <CardTitle className="text-center text-uppercase mb-3">
            Newsletter
          </CardTitle>
          <Form className="text-center">
            <FormGroup>
              <Input
                type="email"
                name="email"
                placeholder="jasonoh1226@gmail.com"
              />
            </FormGroup>
            <Button outline color="success" className="text-uppercase">
              Subscribe
            </Button>
          </Form>
        </CardBody>
      </Card> */}
      {/* <Card>
        <CardBody>
          <CardTitle className="text-center text-uppercase">
            Advertisement
          </CardTitle>
          <img
            src="https://via.placeholder.com/320x200"
            alt="Advert"
            style={{ width: "100%" }}
          />
        </CardBody>
      </Card> */}
      
    </div>
  )
}

export default RightSidebar
