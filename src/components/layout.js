/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.13.1/css/all.css"
        integrity="sha384-xxzQGERXS00kBmZW/6qxqJPyxW3UR0BPsL4c8ILaIWXva5kFi7TxkIIaMiKtqV1Q"
        crossOrigin="anonymous"
      />


      
      <div className="container" id="content">
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
      </div>
      <Footer siteAuthor={data.site.siteMetadata.author} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
