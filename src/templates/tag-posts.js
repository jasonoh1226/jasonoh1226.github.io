import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql} from 'gatsby'
import {Row, Col} from 'reactstrap'

import PostGrid from '../components/post-grid'
import LeftSidebar from "../components/left-sidebar"
import RightSidebar from "../components/right-sidebar"

const TagPosts = ({data, pageContext}) => {

    const {tag} = pageContext
    // const {totalCount} = data.allMarkdownRemark
    // const pageHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`

    return (
        <Layout>
        <SEO title={`Tags | ${tag}`} />
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
                    tags={edge.node.frontmatter.tags}
                    image={
                      edge.node.frontmatter.featuredImage.childImageSharp.fluid
                    }
                  />
                </div>
              )
            })}
          </section>
          </Col>
          <Col md={{size: 3, order: 1}}>
            <LeftSidebar data={data} />
          </Col>
          <Col md={{size: 3, order: 12}}>
            <RightSidebar />
          </Col>
        </Row>
      </Layout>      
    )
}

// It retruns data in props
export const tagQuery = graphql`

  query blogPostsByTag($tag: String!) {
    allMarkdownRemark(
        sort: {fields: [frontmatter___date], order: DESC}
        filter: {frontmatter: {tags: {in:[$tag]}}}
     ) {
         totalCount
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
                      fluid(maxWidth: 700) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                fields {
                    slug
                }
                excerpt
             }
         }
     
    }
  }
`

export default TagPosts;