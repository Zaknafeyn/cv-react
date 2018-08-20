import React, { Component } from 'react'
import { TestComponent } from './testComponent/TestComponent'
import { Header } from './header/Header'
import { Footer } from './footer/Footer'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="root">
        <div className="app">
          <Header />
          <p className="app-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <TestComponent info="some info" />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
