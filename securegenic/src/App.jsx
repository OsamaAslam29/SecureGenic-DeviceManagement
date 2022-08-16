import React from 'react'
import './App.scss'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './Pages/Home/Home';

const App = () => {
  return (
    <>
      <Router>
          <Switch>
                <Route path="/" component={Home} />
          </Switch>
      </Router>
    </>
  )
}

export default App
