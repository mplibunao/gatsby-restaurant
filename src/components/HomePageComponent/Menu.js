import React from "react"
import Product from "./Product"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Section, Title, SectionButton } from "../../utils"
import styled from "styled-components"

const getMenu = graphql`
  {
    items: allContentfulMenu {
      edges {
        node {
          name
          price
          id
          ingredients
          image {
            fixed(height: 150, width: 150) {
              ...GatsbyContentfulFixed_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`

const Menu = () => {
  const {
    items: { edges: products },
  } = useStaticQuery(getMenu)
  return (
    <Section>
      <Title title="featured items" message="little taste" />
      <ProductList>
        {products.map(item => {
          return <Product key={item.node.id} product={item.node} />
        })}
      </ProductList>
    </Section>
  )
}

const ProductList = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 3rem;

  @media (min-width: 776px) {
    grid-template-columns: 80%;
    justify-content: center;
  }

  @media (min-width: 576px) {
    grid-template-columns: 95%;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`

export default Menu
