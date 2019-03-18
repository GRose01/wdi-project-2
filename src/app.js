import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Browser, Route, Switch } from 'react-router-dom'

import './style.scss'

import Home from './components/home'
import SortingCeremony from './components/displayHouse/sortingCeremony'
import Header from './components/header'
import Footer from './components/footer'
import Gryffindor from './components/getinfo/gryffindor'
import Hufflepuff from './components/getinfo/hufflepuff'
import Ravenclaw from './components/getinfo/ravenclaw'
import Slytherin from './components/getinfo/slytherin'

const App = () => {
  return (
    <Browser>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sortingCeremony" component={SortingCeremony} />
          <Route path="/gryffindor" component={Gryffindor} />
          <Route path="/hufflepuff" component={Hufflepuff} />
          <Route path="/ravenclaw" component={Ravenclaw} />
          <Route path="/slytherin" component={Slytherin} />
        </Switch>
        <Footer />
      </div>
    </Browser>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
