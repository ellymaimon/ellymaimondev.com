import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import './layout.css'
import { css } from 'emotion'
import { rhythm } from '../utils/typography'
import PageTransition from 'gatsby-plugin-page-transitions'
import Particles from 'react-particles-js'
import { particlesConfig } from '../utils/particlesjs-config'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import {
  faGithubSquare,
  faLinkedin,
  faBehanceSquare,
} from '@fortawesome/free-brands-svg-icons'

library.add(faEnvelopeSquare, faGithubSquare, faLinkedin, faBehanceSquare)

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <PageTransition>
        <Helmet>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <meta name='description' content="Elly Maimon's personal portfolio website" />
          <meta name='keywords' content='Gatsby, Portfolio, Developer, Software, Design, Graphic, Web, Engineer, React' />
          <meta name='author' content='Elly Maimon' />
          <html lang='en' />
          <title>{data.site.siteMetadata.title}</title>
        </Helmet>
        <Particles
          className={css`
            width: 100%;
            height: 100%;
            position: fixed;
            z-index: -1;
          `}
          params={particlesConfig}
        />
        <div
          className={css`
            margin: ${rhythm(2)};
            color: #e0e2db;
          `}
        >
          {children}
        </div>
      </PageTransition>
    )}
  />
)
