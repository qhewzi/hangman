import React from 'react'
import { 
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom'
import WebFont from 'webfontloader'

import { GlobalProvider } from '../context/GlobalState'

import Start from './Start'
import Game from './Game'

import '../assets/css/app.css'

WebFont.load({
  google: {
    families: ['Lato:300', 'sans-serif']
  }
})

if (process.env.NODE_ENV === 'production') {
  if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    for (let [key, value] of Object.entries(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)) {
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] = typeof value == "function" ? ()=>{} : null;
    }
  }
}

const App = () => {
  return (
    <GlobalProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <main className="site-content">
          <Switch>
            <Route exact path="/game" component={Game} />
            <Route exact path="/" component={Start} />
          </Switch>
        </main>
      </Router>
    </GlobalProvider>
  )
}

export default App;
