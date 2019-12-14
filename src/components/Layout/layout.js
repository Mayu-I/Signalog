import React from "react"
import { Link } from "gatsby"

import Header from "../Header/header"
import "./layout.scss"

class Layout extends React.Component {
  render() {
    // const { location, title, children } = this.props

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
}
export default Layout
