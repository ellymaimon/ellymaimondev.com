import React from 'react'
import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => (
  <Layout>
    <h1>Elly Maimon - Software and Web Developer</h1>
    <FontAwesomeIcon icon={['far', 'envelope']} size="2x" />
    <FontAwesomeIcon icon={['fab', 'github-square']} size="2x" />
    <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
    <p>
      Test body text some text here is the quick brown fox jumped over the lazy
      dog. LATO lato.
    </p>
  </Layout>
)
