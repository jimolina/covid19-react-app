import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './sass/covid19-app.scss'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Country from './components/Country'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="container-fluid p-0">
        <Header />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/country" exact component={Country} />
          <Route path="/country/:id" component={Country} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App