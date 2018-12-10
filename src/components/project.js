import React from 'react'
import { css } from 'emotion'

export default ({ imageUrl, projectTitle }) => {
  const imageStyle = css`
    display: block;
    height: auto;
    width: 400px;
  `

  const overlay = css`
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    background-color: #008cba;
    overflow: hidden;
    width: 400px;
    height: 0;
    transition: 0.5s ease;
  `
  const projectContainer = css`
    position: relative;
    margin: 0 auto;
    width: 400px;
    :hover .${overlay} {
      bottom: 0;
      height: 100%;
    }
  `

  const text = css`
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  `

  return (
    <div>
      <h3>{projectTitle}</h3>
      <div className={projectContainer}>
        <img className={imageStyle} src={imageUrl} alt={projectTitle} />
        <div className={overlay}>
          <div className={text}>Hello World</div>
        </div>
      </div>
    </div>
  )
}
