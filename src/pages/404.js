import React from 'react'
import { Link } from 'gatsby'
import { css } from 'emotion'
import Layout from '../components/layout'
import Navigation from '../components/navigation'
import doh from '../images/doh.jpg'

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
      <img src={doh} alt='Homer going Doh!'/>
      <p>I can't seem to find the page you're searching for!</p>
      <Link to="/">TAKE ME HOME</Link>
    </div>
  </Layout>
)
