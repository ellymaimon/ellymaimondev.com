import React from 'react'
import Layout from '../components/layout'
import { css } from 'emotion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const container = css`
  max-width: 750px;
  width: 100%;
  margin: 100px auto 0 auto;
  text-align: center;
`

const socialMedia = css`
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
`

export default () => (
  <Layout>
    <div className={container}>
      <h1>Elly Maimon</h1>
      <h3>Software + Web Developer / Graphic Designer</h3>
      <div className={socialMedia}>
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
