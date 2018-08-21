import React, { Component } from 'react'
import { Header } from './header/Header'
import { About } from 'components/content/about/About'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import './App.css'

const AppRoutes = () => (
  <Switch>
    <Redirect from="/" to="/about" />
    <Route exact path="/about" component={About} />
    <Route path="/skills" render={() => <h1>Skills</h1>} />
    <Route path="/experience" render={() => <h1>Experience</h1>} />
    <Route path="/education" render={() => <h1>Education</h1>} />
    <Route path="/contact" render={() => <h1>Contact</h1>} />
    <Route render={() => <h1>Page not found</h1>} />
  </Switch>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="root">
          <div className="app">
            <Header />
            <AppRoutes />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
