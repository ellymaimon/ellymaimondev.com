import React from 'react'
import { css } from 'emotion'
import Layout from '../components/layout'
import Navigation from '../components/navigation'

const spanStyle = css`
  display: inline-block;
  margin: 1em auto;
  width: 100%;
  font-size: 24px;
`

export default () => (
  <Layout>
    <Navigation showHome="true" />
    <div
      className={css`
        max-width: 800px;
        margin: 2.5em auto 0 auto;
        text-align: center;
      `}
    >
      <span className={spanStyle}>HTML / CSS / JavaScript(ES6) / C# (.NET)</span>
      <span className={spanStyle}>React / Redux / Angular / Vue</span>
      <span className={spanStyle}>Node.js / Express / GraphQL / MySQL</span>
      <span className={spanStyle}>Firebase / Firestore / Google APIs</span>
      <span className={spanStyle}>Photoshop / Illustrator / InDesign</span>
      <span className={spanStyle}>Semantic UI / Material UI</span>
    </div>
  </Layout>
)
