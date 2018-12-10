import React from 'react'
import { css } from 'emotion'
import { rhythm } from '../utils/typography'

export default ({ imageUrl, projectTitle }) => {
  const projectContainer = css`
    text-align: center;
    padding: ${rhythm(1)};
  `

  const imageContainer = css`
    height: 300px;
    width: 100%;
    margin: 0 auto;
    box-shadow: 0px 0px 10px 2px #ffcb47;
    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${imageUrl});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  `

  const headingInImage = css`
    color: #191716;
    position: relative;
    top: 20%;
    font-size: 36px;
    font-weight: bold;
  `

  return (
    <div className={projectContainer}>
      <div className={imageContainer}>
        <h3 className={headingInImage}>{projectTitle}</h3>
      </div>
    </div>
  )
}
