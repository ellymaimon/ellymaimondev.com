import React from 'react'
import './layout.css'
import { css } from 'emotion'
import { rhythm } from '../utils/typography'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faEnvelopeSquare, faGithubSquare, faLinkedin)

export default ({ children }) => (
  <div
    className={css`
      margin: ${rhythm(2)};
      color: #e0e2db;
    `}
  >
    {children}
  </div>
)
