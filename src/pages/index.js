import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {graphql, useStaticQuery} from 'gatsby'
import {Row, Col} from 'reactstrap'

import PostGrid from '../components/post-grid'
import LeftSidebar from '../components/left-sidebar'
import RightSidebar from '../components/right-sidebar'

const IndexPage = () => {

  const data = useStaticQuery(
    graphql`
        query {
          allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
            edges {
              node {
                id
                frontmatter {
                  title
                  categories
                  date(formatString: "MMMM Do, YYYY")
                  tags
                  featuredImage {
                    childImageSharp {
                      fluid (maxWidth: 500 maxHeight: 280) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                excerpt
                fields {
                  slug
                }
              }
            }
          }


          
        }
    `
  ) 

  //console.log(data)

  return (
    <Layout>
      <SEO title="Home" />   
      <Row>

        <Col md={{size: 6, order: 6}}>
          <section>
            {data.allMarkdownRemark.edges.map((edge, index) => {
              return (
                <div key={index}>
                  <PostGrid
                    title={edge.node.frontmatter.title}
                    date={edge.node.frontmatter.date}
                    categories={edge.node.frontmatter.categories}
                    slug={edge.node.fields.slug}
                    excerpt={edge.node.excerpt}
                    image={
                      edge.node.frontmatter.featuredImage.childImageSharp.fluid
                    }
                    tags={edge.node.frontmatter.tags}
                  />
                </div>
              )
            })}
          </section>
        </Col>
        <Col md={{size: 3, order: 1}}>
          <LeftSidebar data={data}/>
        </Col>
        <Col md={{size: 3, order: 12}}>
          <RightSidebar/>
        </Col>
      </Row>
    </Layout>
  )
  
  }




export default IndexPage
