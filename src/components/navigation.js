import React from 'react'
import { Link } from 'gatsby'
import { css } from 'emotion'

const navStyles = css`
  font-family: 'Copse';
  font-size: 24px;
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
`

const navLink = css`
  transition: 0.5s;
  transition-timing-function: ease;

  :hover {
    color: #70a9a1;
    transform: scale(1.1, 1.1);
  }
`

const activeNavLink = css`
  color: #70a9a1;
  transform: scale(1.1, 1.1);

  :hover {
    cursor: normal;
  }
`

export default ({ showHome }) => {
  return (
    <div className={navStyles}>
      {showHome === 'true' && (
        <Link className={navLink} to="/">
          HOME
        </Link>
      )}
      <Link activeClassName={activeNavLink} className={navLink} to="/about">
        ABOUT
      </Link>
      <Link activeClassName={activeNavLink} className={navLink} to="/projects">
        PROJECTS
      </Link>
      <Link activeClassName={activeNavLink} className={navLink} to="/skills">
        SKILLS
      </Link>
    </div>
  )
}

// margin-bottom: ${rhythm(1.5)};
