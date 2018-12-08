import React from "react"
import './layout.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faEnvelope, faGithubSquare, faLinkedin)

export default ({ children }) => (
  <div>
    {children}
  </div>
)