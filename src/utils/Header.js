import React from "react"
import styled from "styled-components"
import image from "../images/bcg/homeBcg.jpeg"

function HomeHeader({ img = image, children }) {
  return <IndexHeader img={img}>{children}</IndexHeader>
}

const PageHeader = ({ img = image, children }) => {
  return <DefaultHeader img={img}>{children}</DefaultHeader>
}

const IndexHeader = styled.header`
  min-height: calc(100vh - 55.78px);
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${({ img }) => img}) center/cover fixed no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`

const DefaultHeader = styled(IndexHeader)`
  min-height: 60vh;
`

export { HomeHeader, PageHeader }
