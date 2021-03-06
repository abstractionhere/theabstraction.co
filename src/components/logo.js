import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image';

const Logo = () => {
  const data = useStaticQuery(graphql`
  query Logo {
    image: file(relativePath: {eq: "logo.png"}) {
      childImageSharp {
        fixed(
          height: 48
        ) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }`);
  console.log(data);
  return <Img
  fixed={data.image.childImageSharp.fixed}
  alt="Logo"
  className="logo"
  />
}

export default Logo
