import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Badge, Row, Col } from "reactstrap"
import {Link} from 'gatsby'

import { Slugify } from "../util/slugify"
import Author from "../components/author"
import RightSidebar from "../components/right-sidebar"

const CategoriesPage = ({ pageContext }) => {
  const { categories, categoryPostCounts } = pageContext

  return (
    <Layout>
      <SEO title="Categories" />
      <Row>
        <Col md={{size: 6, order: 6}}>
        <section className="categories-grid"> 
        <div className="categories-grid-container">
            <div className="categories-container">
            <ul>
                {categories.map((cate, index) => (
                    <li key={index} className="categories" >
                    <Link to={`/categories/${Slugify(cate)}`}>
                        {cate} <Badge color="secondary"> {categoryPostCounts[cate]}</Badge>
                    </Link>
                    </li>
                ))}
              </ul>     
            </div> 
          </div>
        </section>
          
        </Col>
        <Col md={{size: 3, order: 1}}>
          <Author />
        </Col>
        <Col md={{size: 3, order: 12}}>
          <RightSidebar />
        </Col>
      </Row>
    </Layout>
  )
}

export default CategoriesPage
