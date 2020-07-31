import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { graphql, useStaticQuery } from "gatsby"

import ProfileImage from "../components/profile-image"

const AboutPage = () => {

    const authorQuery = useStaticQuery(graphql`
    query authourAbooutQuery {
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
        <Layout>
            <SEO title="About" />
            <div>
            <div style={{ margin: "0 auto", width: "20%"}}>
            <ProfileImage className="profile-image" />
          </div>
                <h1>Hi, I am Jason</h1>
                <p>I am a full stack developer with 2 years experience. 
                    I create websites and applications that are fast, easy to use, and built with best practices. </p>
                <p>I take great pride in not only being able to complete work to the high standard
                    you expect but also go the extra mile wherever posssible.
                </p>
                <p>I can quickly and efficiently join your team using continuous-integration methods
                    and tools such as Git and Agile.
                </p>
                <p>If you'd like to find out more about how I work please <a href="mailto:jasonoh1226@gmail.com" style={{textDecoration: 'underline', color: 'purple'}}>get in touch</a> !
                </p>

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
            </ul>
          </div>
            </div>
        </Layout>       
    )
}


export default AboutPage;