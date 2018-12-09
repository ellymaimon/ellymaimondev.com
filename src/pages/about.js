import React from 'react'
import Layout from '../components/layout'
import Navigation from '../components/navigation'
import { css } from 'emotion'
import { rhythm } from '../utils/typography'
import me from '../images/me_square.jpg'

const imgDiv = css`
  width: 100%;
  max-width: 300px;
  margin: ${rhythm(2)} auto;
`

const imgStyle = css`
  border-radius: 100%;
  width: 300px;
  border: 5px solid white;
`

export default () => (
  <Layout>
    <Navigation showHome="true" />
    <div className={imgDiv}>
      <img className={imgStyle} src={me} alt="Elly enjoying a hamburger." />
    </div>
  </Layout>
)
