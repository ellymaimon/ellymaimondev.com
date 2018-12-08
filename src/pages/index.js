import React from 'react'
import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => (
  <Layout>
    <div>
      <h1>Elly Maimon</h1>
      <h2>Software Developer</h2>
      <FontAwesomeIcon icon={['far', 'envelope']} size="2x" />
      <FontAwesomeIcon icon={['fab', 'github-square']} size="2x" />
      <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
      <p>
        Test body text some text here is the quick brown fox jumped over the
        lazy dog. LATO lato.
      </p>
    </div>
  </Layout>
)
