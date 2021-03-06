import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "react-emotion"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
      <div>

        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          const cutDate = node.excerpt.split(' ').slice(3).join(' ')
          return (
            <div key={node.id}>
              <Link
                  to={node.fields.slug}
                  className={css`
                      text-decoration: none;
                      color: inherit;
                  `}>
                  <h3
                      className={css`
                          margin-bottom: ${rhythm(1 / 4)};
                  `}
                  >
                  {node.frontmatter.title}{" "}
                  <span
                      className={css`
                      color: #bbb;
                      `}
                  >
                      — {node.frontmatter.date}
                  </span>
                  </h3>
                  <p>{cutDate}</p>
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
              slug
          }
          excerpt
        }
      }
    }
  }
`
