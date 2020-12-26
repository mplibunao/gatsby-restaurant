import React, { useState } from "react"
import styled from "styled-components"
import { styles } from "../../../utils"
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa"

const NavbarIcons = () => {
  const [icons, setIcons] = useState([
    {
      id: 1,
      icon: <FaFacebook className="icon facebook-icon" />,
      path: "https://www.facebook.com",
    },
    {
      id: 2,
      icon: <FaTwitter className="icon twitter-icon" />,
      path: "https://www.twitter.com",
    },
    {
      id: 3,
      icon: <FaInstagram className="icon instagram-icon" />,
      path: "https://www.instagram.com",
    },
  ])

  return (
    <IconWrapper>
      {icons.map(item => {
        return (
          <a
            key={item.id}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        )
      })}
    </IconWrapper>
  )
}

const IconWrapper = styled.div`
  display: none;

  .icon {
    font-size: 1.3rem;
    cursor: pointer;
    ${styles.transFunction()};

    &:hover {
      color: ${styles.colors.mainYellow};
    }
  }

  .facebook-icon {
    color: #3b579d;
  }

  .twitter-icon {
    color: #3ab7f0;
  }

  .instagram-icon {
    color: #da5f53;
  }

  @media (min-width: 768px) {
    display: flex;
    width: 10rem;
    justify-content: space-around;
  }
`

export default NavbarIcons
