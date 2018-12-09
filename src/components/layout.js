import React from 'react'
import './layout.css'
import { css } from 'emotion'
import { rhythm } from '../utils/typography'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import {
  faGithubSquare,
  faLinkedin,
  faBehanceSquare,
} from '@fortawesome/free-brands-svg-icons'
import PageTransition from 'gatsby-plugin-page-transitions'
import Particles from 'react-particles-js'
import { particlesConfig } from '../utils/particlesjs-config'

library.add(faEnvelopeSquare, faGithubSquare, faLinkedin, faBehanceSquare)

export default ({ children }) => (
  <PageTransition>
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
)
