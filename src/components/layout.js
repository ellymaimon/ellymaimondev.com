import React from 'react'
import './layout.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faEnvelopeSquare, faGithubSquare, faLinkedin)

export default ({ children }) => (
  <div style={{ margin: '50px', color: '#e0e2db' }}>{children}</div>
)
