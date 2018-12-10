import React from 'react'
import Layout from '../components/layout'
import Navigation from '../components/navigation'
import Project from '../components/project'
import { css } from 'emotion'
import { rhythm } from '../utils/typography'
import whatsOnTap from '../images/bars.png'
import dungeonEscape from '../images/dungeon.png'
import circa from '../images/circa.png'
import citrus from '../images/citrus.png'

const container = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100%;
  width: 100%;
  max-width: 1000px;
  height: 100%;
  margin: ${rhythm(2)} auto;
`

export default () => (
  <Layout>
    <Navigation showHome="true" />
    <div className={container}>
      {/* First Column */}
      <div>
        <Project projectTitle="What's On Tap?" imageUrl={whatsOnTap} />
        <Project projectTitle="Dungeon Escape" imageUrl={dungeonEscape} />
      </div>

      {/* Second Column */}
      <div>
        <Project projectTitle="Circa" imageUrl={circa} />
        <Project projectTitle="Citrus Ciderhouse" imageUrl={citrus} />
      </div>
    </div>
  </Layout>
)
