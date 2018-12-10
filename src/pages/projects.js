import React from 'react'
import Layout from '../components/layout'
import { css } from 'emotion'
import Navigation from '../components/navigation'
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

const projectContainer = css`
  text-align: center;
  padding: ${rhythm(1)};
`

const image = css`
  height: 50vh;
  max-height: 300px;
  width: 50vw;
  max-width: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  margin: 0 auto;
  box-shadow: 0px 0px 10px 2px #ffcb47;
`

export default () => (
  <Layout>
    <Navigation showHome="true" />
    <div className={container}>
      <div>
        <div className={projectContainer}>
          <h3>What's On Tap?</h3>
          <div
            className={image}
            style={{ backgroundImage: `url(${whatsOnTap})` }}
          />
        </div>
        <div className={projectContainer}>
          <h3>Dunegon Escape</h3>
          <div
            className={image}
            style={{ backgroundImage: `url(${dungeonEscape})` }}
          />
        </div>
      </div>

      <div>
        <div className={projectContainer}>
          <h3>Circa</h3>
          <div className={image} style={{ backgroundImage: `url(${circa})` }} />
        </div>
        <div className={projectContainer}>
          <h3>Citrus Ciderhouse</h3>
          <div
            className={image}
            style={{ backgroundImage: `url(${citrus})` }}
          />
        </div>
      </div>
    </div>
  </Layout>
)
