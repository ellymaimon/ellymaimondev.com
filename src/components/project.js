import React from 'react'
import { css } from 'emotion'

export default ({
  imageUrl,
  projectTitle,
  liveSiteLink,
  liveSiteLinkText,
  description,
  technologies,
}) => {
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
    background: linear-gradient(45deg, #ffcb47, #70a9a1);
    opacity: 0.95;
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

  const textContainer = css`
    width: 100%;
    color: white;
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  `

  const link = css`
    transition: 0.5s;
    transition-timing-function: ease;
    color: black;

    :hover {
      color: white;
      transform: scale(1.1, 1.1);
    }
  `

  return (
    <div>
      <h3 className={css`margin-bottom: 0.5em;`}>{projectTitle}</h3>
      <div className={projectContainer}>
        <img className={imageStyle} src={imageUrl} alt={projectTitle} />
        <div className={overlay}>
          <div className={textContainer}>
            <p>{description}</p>
            <p
              className={css`
                word-spacing: 0.5em;
              `}
            >
              {technologies}
            </p>
            <a
              className={link}
              href={liveSiteLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {liveSiteLinkText}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
