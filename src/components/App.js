import React, { Component } from 'react'
import { Header } from './header/Header'
import { PageContent } from 'components/content/PageContent'
import { Footer } from './footer/Footer'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'

// const AppRoutes = () => (
//   <Switch>
//     <Route exact path="/" component={About} />
//     <Route exact path="/about" component={About} />
//     <Route exact path="/skills" component={Skills} />
//     <Route exact path="/experience" component={Experience} />
//     <Route exact path="/education" component={Education} />
//     <Route exact path="/contact" component={Contact} />
//     <Route render={() => <h1>Page not found</h1>} />
//   </Switch>
// )

class App extends Component {
  render() {
    return (
      <Router>
        <div className="root">
          <div className="app">
            <Header />
            <PageContent />
            {/*<AppRoutes />*/}
            <Footer />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
