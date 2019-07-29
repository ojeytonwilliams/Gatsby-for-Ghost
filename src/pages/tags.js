/* eslint-disable react/prop-types */
import React from "react"
import { graphql } from "gatsby"

const Tags = ({ data }) => {
    const tags = data.allGhostTag
    // console.log(tags)
    return (
    <>
      <article className="tags">
        { tags }
      </article>
    </>
  )
}

export default Tags

export const postQuery = graphql`
query MyQuery {
    allGhostTag {
      edges {
        node {
          name
        }
      }
    }
  }`
