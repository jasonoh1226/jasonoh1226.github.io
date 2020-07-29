import React from "react"

const Footer = ({ siteAuthor }) => {
  return (
    <footer className="site-footer">
      <p>
        Created By {siteAuthor}, © {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
