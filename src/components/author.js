import React from "react"
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardText
} from "reactstrap"
import { graphql, useStaticQuery } from "gatsby"

import ProfileImage from "./profile-image"

const Author = () => {
  const authorQuery = useStaticQuery(graphql`
    query authourQuery {
      site {
        siteMetadata {
          title
          author
          bio
          github
          linkedin
        }
      }
    }
  `)

  return (
    <div>
      <Card>
        <CardBody>
          <div style={{ margin: "0 auto", width: "30%"}}>
            <ProfileImage className="profile-image" />
          </div>
          <CardTitle className="text-center">
            {authorQuery.site.siteMetadata.author}
          </CardTitle>
          <CardSubtitle className="text-center">
            {authorQuery.site.siteMetadata.bio}
          </CardSubtitle>
          <CardText className="text-center">I am a full stack developer with 2 years experience. 
                    I create websites and applications that are fast, easy to use, and built with best practices.</CardText>
          
          <div className="author-social-links">
            <ul>
              <li>
                <a
                  href={authorQuery.site.siteMetadata.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github"
                >
                  <i className="fab fa-github fa-2x"></i>
                </a>
              </li>
              <li>
                <a
                  href={authorQuery.site.siteMetadata.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin"
                >
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
              </li>
<<<<<<< HEAD
=======
              <li>
                <a
                  href={authorQuery.site.siteMetadata.email}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin"
                >
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
              </li>
>>>>>>> “message”
            </ul>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default Author
