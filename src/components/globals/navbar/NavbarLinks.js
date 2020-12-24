import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../../utils"

const NavbarLinks = ({ navbarOpen }) => {
  const [links, setLinks] = useState([
    {
      id: 0,
      path: "/",
      name: "home",
    },
    {
      id: 1,
      path: "/about/",
      name: "about",
    },
    {
      id: 2,
      path: "/menu",
      name: "menu",
    },
    {
      id: 3,
      path: "/contact",
      name: "contact",
    },
  ])

  return (
    <LinkWrapper open={navbarOpen}>
      {links.map(link => {
        return (
          <li key={link.id}>
            <Link to={link.path} className="nav-link">
              {link.name}
            </Link>
          </li>
        )
      })}
    </LinkWrapper>
  )
}

const LinkWrapper = styled.ul`
  height: ${({ open }) => (open ? "152px" : "0px")};
  overflow: hidden;

  li {
    list-style-type: none;
  }

  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem;
    color: ${styles.colors.mainGrey};
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    transition: ${styles.transDefault};

    &:hover {
      background: ${styles.colors.mainGrey};
      color: ${styles.colors.mainYellow};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }
`

export default NavbarLinks