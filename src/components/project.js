import React from 'react'
import { css } from 'emotion'
import { rhythm } from '../utils/typography'

const projectContainer = css`
  text-align: center;
  padding: ${rhythm(1)};
`

const imageContainer = css`
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

const headingInImage = css`
  color: #191716;
  position: relative;
  top: 20%;
  font-size: 36px;
  font-weight: bold;
`

export default ({ imageUrl, projectTitle }) => (
  <div className={projectContainer}>
    <div
      className={imageContainer}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <h3 className={headingInImage}>{projectTitle}</h3>
    </div>
  </div>
)
