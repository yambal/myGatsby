import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="bg-black text-white">
    <div className="container px-20 flex flex-row">
      <div className="flex-grow">
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
      <div className="flex-grow">
        <Link to="/aphorisms">格言</Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
