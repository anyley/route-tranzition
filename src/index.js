import React, { useEffect, useState } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route, Link, withRouter } from 'react-router-dom'
import './styles.css'
import './anime.scss'

const PageSelector = ({ location }) => (
  <Switch location={location}>
    <Route path="/" exact component={A} />
    <Route path="/a" component={A} />
    <Route path="/b" component={B} />
    <Route path="/c" component={C} />
  </Switch>
)

const App = withRouter(function(props) {
  const { location } = props
  const lastLocation = App._lastLocation
  App._lastLocation = location

  return [
    <div key={App.frame} className="leave">
      <PageSelector location={lastLocation} />
    </div>,
    <div key={++App.frame} className="enter">
      <PageSelector location={location} />
    </div>,
  ]
})

App._lastLocation = { pathname: '/a' }
App.frame = 0

const A = () => (
  <div style={{ background: 'lightpink' }}>
    <Link to="/b">A</Link>
  </div>
)

const B = () => (
  <div style={{ background: 'lightblue' }}>
    <Link to="/c">B</Link>
  </div>
)

const C = () => (
  <div style={{ background: 'lightgreen' }}>
    <Link to="/a">C</Link>
  </div>
)

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
)
