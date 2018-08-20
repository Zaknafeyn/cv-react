import React, { Component } from 'react'
import { Header } from './header/Header'
import { Footer } from './footer/Footer'
import { About } from 'components/content/about/About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="root">
          <div className="app">
            <Header />
            <Switch>
              <Route exact path="/" component={About} />
              <Route path="/skills" render={() => <h1>Skills</h1>} />
              <Route path="/experience" render={() => <h1>Experience</h1>} />
              <Route path="/education" render={() => <h1>Education</h1>} />
              <Route path="/contact" render={() => <h1>Contact</h1>} />
              <Route render={() => <h1>Page not found</h1>} />
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
