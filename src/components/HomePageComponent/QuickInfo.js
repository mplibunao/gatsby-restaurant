import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Section, Title, SectionButton, styles } from "../../utils"

const QuickInfo = () => {
  return (
    <Section>
      <Title message="let us tell you" title="our mission" />
      <QuickInfoWrapper>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A unde nemo
          quis sint, doloremque veniam odio, est magnam maxime repudiandae eos
          velit minima consectetur dolore voluptatum asperiores libero porro
          nihil nam laudantium dolorum! Error temporibus labore commodi, at eius
          sint aspernatur fugiat nulla dolorum non, cupiditate rem laudantium
          voluptatibus soluta?
        </p>
        <Link to="/about" className="link">
          <SectionButton className="section-button">about</SectionButton>
        </Link>
      </QuickInfoWrapper>
    </Section>
  )
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;

  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }

  .link {
    text-decoration: none;
  }

  .section-button {
    margin: 2rem auto;
  }

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 992px) {
    width: 60%;
  }
`

export default QuickInfo
