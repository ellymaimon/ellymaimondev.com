import React from 'react'
import Layout from '../components/layout'
import Navigation from '../components/navigation'
import { css } from 'emotion'
import { rhythm } from '../utils/typography'
import me from '../images/me_square.jpg'

const imgDiv = css`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`

const imgStyle = css`
  border-radius: 100%;
  width: 300px;
  border: 5px solid white;
`

export default () => (
  <Layout>
    <Navigation showHome="true" />
    <h1
      className={css`
        margin: ${rhythm(2)} auto ${rhythm()} auto;
        text-align: center;
      `}
    >
      Hey there, I'm Elly Maimon! <span role="img" aria-label="Waving hand emoji">👋</span>
    </h1>

    <div className={imgDiv}>
      <img className={imgStyle} src={me} alt="Elly enjoying a hamburger." />
    </div>
    <h4
      className={css`
        font-style: italic;
        font-size: 16px;
        margin: 0 auto ${rhythm()} auto;
        text-align: center;
      `}
    >
      "Good luck convincing me In-n-Out isn't the best fast food burger."
    </h4>
    <div
      className={css`
        max-width: 800px;
        margin: 0 auto;
      `}
    >
      <p>
        I am a software and web developer with a rich background in graphic
        design. While studying Physics in college, I felt the need to shift to a
        more creative major, and made an about-face to the world of Graphic
        Design. I studied the fundamentals of visual communication, where I took
        my first class in user interfaces and digital media and inadvertently
        fell in love with the coding aspects (also, I couldn’t draw).
      </p>

      <p>
        Since then, I’ve been working in food service while living in a handful
        of different cities along the West Coast. I’ve bolstered my
        communication skills, work ethic, ability to collaborate, and ability to
        lead, and am now an effective leader and mediator.
      </p>

      <p>
        In 2018, I attended a web development boot camp at Epicodus, where I
        learned to write clean, best-practice, and test-driven code while using
        my graphic deisgn knowledge to create robust UI experiences. I’m adept
        at bridging the gap between form and function while keeping the user in
        mind.
      </p>
    </div>
  </Layout>
)
