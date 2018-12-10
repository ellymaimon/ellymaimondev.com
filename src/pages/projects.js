import React from 'react'
import Layout from '../components/layout'
import Navigation from '../components/navigation'
import Project from '../components/project'
import { css } from 'emotion'
import { rhythm } from '../utils/typography'
import whatsOnTap from '../images/whatsontap.png'
import dungeonEscape from '../images/dungeon.png'
import circa from '../images/circa.png'
import citrus from '../images/citrus.png'
import bread from '../images/bread.png'

const container = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100%;
  grid-gap: 1em;
  width: 100%;
  max-width: 1000px;
  height: 100%;
  margin: ${rhythm(2)} auto;
  text-align: center;
`

export default () => (
  <Layout>
    <Navigation showHome="true" />
    <div className={container}>
      {/* First Column */}
      <div>
        <Project
          projectTitle="Bread Baker's Apprentice"
          imageUrl={bread}
          liveSiteLink="https://github.com/ellymaimon/bread-bakers-apprentice"
          liveSiteLinkText="Check out the Github repo"
          description="(In Progress) Recipe manager for bread bakers"
          technologies="React Redux SemanticUI"
        />
        <Project
          projectTitle="Circa"
          imageUrl={circa}
          liveSiteLink="https://vimeo.com/305578330"
          liveSiteLinkText="Check out a quick sample"
          description="Internal flexible revenue and ROI reporting"
          technologies="NodeJS React Firestore"
        />
        <Project
          projectTitle="Citrus Ciderhouse"
          imageUrl={citrus}
          liveSiteLink="https://angular-team-week.firebaseapp.com/"
          liveSiteLinkText="Check out the live site"
          description="CMS for a fictional Cider Bar"
          technologies="Angular TypeScript Firebase"
        />
      </div>

      {/* Second Column */}
      <div>
        <Project
          projectTitle="What's On Tap?"
          imageUrl={whatsOnTap}
          liveSiteLink="http://whats-on-tap-app.herokuapp.com/"
          liveSiteLinkText="Check out the live site"
          description="Find and maintain a list of your favorite beers"
          technologies="C# .NET Entity MySQL"
        />
        <Project
          projectTitle="Dungeon Escape"
          imageUrl={dungeonEscape}
          liveSiteLink="https://ellymaimon.github.io/Dungeon-Escape/"
          liveSiteLinkText="Play the game! (turn on volume)"
          description="A 2D point-and-click RPG adventure game"
          technologies="VanillaJS jQuery Photoshop"
        />
      </div>
    </div>
  </Layout>
)
