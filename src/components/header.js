import React from 'react'
import { Link } from 'react-router-dom'


class Header extends React.Component {
  render() {
    return(
      <header>
        <nav>
          <Link to="/gryffindor">Gryffindor</Link>
          <Link to="/slytherin">Slytherin</Link>
          <Link to="/ravenclaw">Ravenclaw</Link>
          <Link to="/hufflepuff">Hufflepuff</Link>
          <Link to="/">Sorting</Link>
        </nav>
      </header>
    )
  }
}

export default Header
