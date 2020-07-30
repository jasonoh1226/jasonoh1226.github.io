import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Badge, Button, Row, Col } from "reactstrap"

import { Slugify } from "../util/slugify"
import Author from "../components/author"
import RightSidebar from "../components/right-sidebar"

const TagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext

  return (
    <Layout>
      <SEO title="Tags" />
      <Row>
        <Col lg={{size: 6, order: 6}}>
        <section className="tags-grid"> 
        <div className="tags-grid-container">
            <div className="tags-container">
            <ul>
                {tags.map((tag, index) => (
                    <li key={index} className="tags">
                    <Button color="dark" href={`/tags/${Slugify(tag)}`}>
                        {tag} <Badge color="secondary"> {tagPostCounts[tag]}</Badge>
                    </Button>
                    </li>
                ))}
              </ul> 
            </div> 
          </div>
        </section>
       
        </Col>
        <Col lg={{size: 3, order: 1}}>
          <Author />
        </Col>
        <Col lg={{size: 3, order: 12}}>
          <RightSidebar />
        </Col>
      </Row>
    </Layout>
  )
}

export default TagsPage
