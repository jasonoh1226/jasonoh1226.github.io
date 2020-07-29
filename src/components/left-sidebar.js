import React from "react"
// import {
//   Card,
//   CardTitle,
//   CardBody,
//   Badge,
// } from "reactstrap"
// import { Link } from "gatsby"
// import { Slugify } from "../util/slugify"

import Author from "./author"

const LeftSidebar = ({ data }) => {
  return (
    <div>
      <Author />
      {/* <Card>
        <CardBody>
          <CardTitle className="mb-3">Categories</CardTitle>

          {data.allMarkdownRemark.edges.map((edge, index) => {
            return (
              <ul className="post-categories" key={index}>
                {edge.node.frontmatter.categories.map((category, index) => (
                  <li key={index}>
                    <Link to={`/categories/${Slugify(category)}`}>
                      <Badge color="light">{category}</Badge>
                    </Link>
                  </li>
                ))}
              </ul>
            )
          })}
        </CardBody>
      </Card> */}
    </div>
  )
}

export default LeftSidebar
