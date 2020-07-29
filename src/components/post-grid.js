import React from 'react'
import { Link } from 'gatsby'
import {Badge, Card, CardTitle, CardText, CardSubtitle, CardBody} from 'reactstrap'
import Img from 'gatsby-image'

const PostGrid = ({title, categories, slug, date, excerpt, image, tags}) => {

    return (
      <Card>
         {/* you need a / in your <Link> component. Without that it'll take the relative path 
         https://stackoverflow.com/questions/62414838/gatsby-js-blog-is-appending-blog-twice-to-a-post
         */}
        <Link to={`/${slug}`}>
          <Img fluid={image} />
        </Link>
        <CardBody>
          <CardSubtitle>
            <span>{date}</span>
            {` `}
            <ul className='post-categories'>
              {categories.map((category, index) => (
                <li key={index}>
                    <Badge color='light'>{category}</Badge>
                </li>
              ))}
            </ul>
          </CardSubtitle>
          <Link to={`/${slug}`}>
            <CardTitle>{title}</CardTitle>
            <CardText>{excerpt}</CardText>
          </Link>      
        </CardBody>        
      </Card>
    )
}

export default PostGrid