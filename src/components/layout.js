import React from "react";
import { css } from "react-emotion";
import { StaticQuery, Link, graphql } from "gatsby";
import { Helmet } from 'react-helmet';

import { rhythm } from "../utils/typography";
import SwipeableTemporaryDrawer from './menu';

export default ({ children }) => (
  <div>

  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title,
            description,
          }
        }
      }
    `
}
    render={data => (
      <div
        className={css`
          margin: 0 auto;
          max-width: 850px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
          @media (max-width: 415px) {
            padding: ${rhythm(1)};
          }
        `}
      >
        <Helmet>
            <meta charSet="utf-8" />
            <title>Hannah Werman</title>
            <link rel="canonical" href="#"/>>
        </Helmet>
        <div className={css`
          float: right;
          max-width: 35%;
          margin-top: 1.5vh;
        `}>
          <SwipeableTemporaryDrawer/>

        </div>
        <Link to={`/`} className={css`
          margin-right: 0;
        `}>
          <h1 className={css`
            font-size: 2.5rem;
            letter-spacing: 1.5px;
            margin-bottom: 0.5rem;
            @media (max-width: 415px) {
              font-size: 1.3rem;
              width: 80%;
              margin-top: 1vh;
            }
            &::hover {
              background-color: black;
            }
          `}>
            {data.site.siteMetadata.title}
          </h1>
          <h4
            className={css`
              margin-bottom: ${rhythm(1.5)};
              display: inline-block;
              font-style: normal;
              font-size: 1rem;
              @media (max-width: 415px) {
                font-size: 11px;
              }
            `}
          >
            {data.site.siteMetadata.description}
          </h4>
        </Link>
        {children}
      </div>

    )}
  />

  <footer className={css`
    max-width: 850px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 ${rhythm(2)} ${rhythm(0.5)} ${rhythm(2)};
    font-size: 12px;
    text-align: right;
  `}>
          Built with &hearts; using React, Gatsby & GraphQL.
  </footer>

  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-135263841-1"></script>
  <script dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-135263841-1');
    `
  }}/>


  </div>
)