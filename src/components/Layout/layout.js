import React from "react"
import PropTypes from "prop-types"

import Header from "../Header/header"
import "./layout.scss"



const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
          {` `}
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
