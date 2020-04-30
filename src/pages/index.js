import React from "react"

import Layout from "../components/Layout/layout"
import TabTypes from "../types/tabTypes"
import AboutPanel from "../components/AboutPanel/aboutPanel"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout curTab={TabTypes.ABOUT}>
      <SEO title="Home" />
      <div style={{display: "flex", justifyContent: "center"}}>
        <AboutPanel />
      </div>
    </Layout>
  )
}

export default IndexPage
