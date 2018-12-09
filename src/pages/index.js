import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { css } from 'emotion'
import { rhythm } from '../utils/typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const container = css`
  max-width: 750px;
  width: 100%;
  height: 50%;
  text-align: center;
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
`

const socialMediaDiv = css`
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: ${rhythm(1.5)};
`

const socialMediaIcon = css`
  transition: 0.5s;
  transition-timing-function: ease;

  :hover {
    color: #ffcb47;
    transform: scale(1.1, 1.1);
  }
`

const navLink = css`
  display: inline-block;
  transition: 0.5s;
  transition-timing-function: ease;

  :hover {
    color: #70a9a1;
    transform: scale(1.1, 1.1);
  }
`

export default () => (
  <Layout>
    <div className={container}>
      <h1>Elly Maimon</h1>
      <h2>Software Developer + Graphic Designer</h2>
      <div className={socialMediaDiv}>
        <a
          href="mailto:eliranmaimon@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={socialMediaIcon}
        >
          <FontAwesomeIcon icon="envelope-square" size="3x" />
        </a>
        <a
          href="https://github.com/ellymaimon"
          target="_blank"
          rel="noopener noreferrer"
          className={socialMediaIcon}
        >
          <FontAwesomeIcon icon={['fab', 'github-square']} size="3x" />
        </a>
        <a
          href="https://www.linkedin.com/in/ellymaimon"
          target="_blank"
          rel="noopener noreferrer"
          className={socialMediaIcon}
        >
          <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" />
        </a>
        <a
          href="https://www.behance.net/emaimon"
          target="_blank"
          rel="noopener noreferrer"
          className={socialMediaIcon}
        >
          <FontAwesomeIcon icon={['fab', 'behance-square']} size="3x" />
        </a>
      </div>

      <Link to="/about/" className={navLink}>
        <h3>ABOUT</h3>
      </Link>
      <br />
      <Link to="/projects/" className={navLink}>
        <h3>PROJECTS</h3>
      </Link>
    </div>
  </Layout>
)
