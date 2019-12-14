import React from "react"
import PropTypes from "prop-types"

import Header from "../Header/header"
import Footer from "../Footer/footer"
import "./layout.scss"



const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
