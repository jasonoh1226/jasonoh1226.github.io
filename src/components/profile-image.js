import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const ProfileImage = () => {

  const data = useStaticQuery(graphql`
    query {
      profileImage: file(relativePath: { eq: "profile.jpg" }) {
        id
        childImageSharp {
          fixed (width: 120 height: 120) {
            ...GatsbyImageSharpFixed
          }
          fluid (maxWidth: 300 maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.profileImage.childImageSharp.fluid} alt="profileImage" imgStyle={{ 'borderRadius': '50%'}} />
}

export default ProfileImage
