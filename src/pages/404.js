import React from "react"
import {Link} from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h4>Oops..Something went wrong!</h4>
    <Link className="btn btn-primary" to={'/'}>Go Home</Link>
  </Layout>
)

export default NotFoundPage
