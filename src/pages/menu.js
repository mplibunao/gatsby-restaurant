import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import img from "../images/bcg/menuBcg.jpeg"

const MenuPage = () => {
  return (
    <Layout>
      <SEO title="Menu" />
      <PageHeader img={img}>
        <Banner title="menu" subtitle="let's dig in" />
      </PageHeader>
    </Layout>
  )
}

export default MenuPage
