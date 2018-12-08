import React from 'react'
import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => (
  <Layout>
    <div
      style={{
        maxWidth: '750px',
        width: '100%',
        margin: '100px auto 0 auto',
        textAlign: 'center',
      }}
    >
      <h1>Elly Maimon</h1>
      <h3>Software + Web Developer / Graphic Designer</h3>
      <div>
        <FontAwesomeIcon icon="envelope-square" size="2x" />
        <FontAwesomeIcon icon={['fab', 'github-square']} size="2x" />
        <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
      </div>
      <p>
        Test body text some text here is the quick brown fox jumped over the
        lazy dog. LATO lato.
      </p>
    </div>
  </Layout>
)
