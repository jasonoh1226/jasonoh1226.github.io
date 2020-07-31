import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import {Row, Col} from 'reactstrap'

import PostGrid from '../components/post-grid'
import LeftSidebar from '../components/left-sidebar'
import RightSidebar from '../components/right-sidebar'
import PaginationLinks from '../components/pagination-links'

const AllPostsList = ({data, pageContext}) => {

  //console.log(data)

  const {currentPage, numberOfPages} = pageContext

  console.log (pageContext)

  console.log (`postList ${currentPage} ${numberOfPages}`)

  return (
    <Layout>
      <SEO title="Home" />   
      <Row>
        <Col lg={{size: 6, order: 6}}>
          <h3>{`Page: ${currentPage}`}</h3>
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
            <PaginationLinks currentPage={currentPage} numberOfPages={numberOfPages}/>
          </section>
        </Col>
        <Col lg={{size: 3, order: 1}}>
          <LeftSidebar data={data}/>
        </Col>
        <Col lg={{size: 3, order: 12}}>
          <RightSidebar/>
        </Col>
      </Row>
    </Layout>
  )
  
}

export const postListQuery = graphql`
    query postListQuery($skip: Int!, $limit: Int! ) {
        allMarkdownRemark(
            sort: {fields: [frontmatter___date], order: DESC}
            limit: $limit
            skip: $skip
        ) {
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


export default AllPostsList
