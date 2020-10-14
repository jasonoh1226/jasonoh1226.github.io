import React from "react"

const Footer = ({ siteAuthor }) => {
  return (
    <footer className="site-footer">
      <p>
      © {new Date().getFullYear()} {siteAuthor} Built with <a href="https://www.gatsbyjs.org/">Gatsby</a>
      </p>
    </footer>
  )
}

export default Footer
