import React from "react"

const Footer = ({ siteAuthor }) => {
  return (
    <footer className="site-footer">
      <p>
<<<<<<< HEAD
        Created By {siteAuthor}, © {new Date().getFullYear()}
=======
      © {new Date().getFullYear()} {siteAuthor} Built with <a href="https://www.gatsbyjs.org/">Gatsby</a>
>>>>>>> “message”
      </p>
    </footer>
  )
}

export default Footer
