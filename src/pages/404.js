import React from 'react'
import { css } from 'emotion'
import Layout from '../components/layout'
import Navigation from '../components/navigation'

export default () => (
  <Layout>
    <Navigation showHome="true" />
    <div
      className={css`
        max-width: 800px;
        margin: 2em auto;
        text-align: center;
      `}
    >
      <h1>D'oh!!</h1>
      <p>
        I can't seem to find the page you're searching for. How about a donut
        instead?
      </p>
    </div>
  </Layout>
)
