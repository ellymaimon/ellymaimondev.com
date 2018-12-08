import React from 'react'
import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const container = {
  maxWidth: '750px',
  width: '100%',
  margin: '100px auto 0 auto',
  textAlign: 'center',
}

const socialMedia = {
  width: '50%',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-evenly',
}

// const socialMediaIcon = {
//   textDecoration: 'none',
//   color: 'inherit'
// }

export default () => (
  <Layout>
    <div style={container}>
      <h1>Elly Maimon</h1>
      <h3>Software + Web Developer / Graphic Designer</h3>
      <div style={socialMedia}>
        <a
          href="mailto:eliranmaimon@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon="envelope-square" size="3x" />
        </a>
        <FontAwesomeIcon icon={['fab', 'github-square']} size="3x" />
        <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" />
      </div>
    </div>
  </Layout>
)
