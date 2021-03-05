import React, { useState } from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import Snowfall from 'react-snowfall'

import { GetCastContext } from './components/GetCastContext.jsx'

import Homepage from './components/Homepage.jsx'
import Main from './components/Main.jsx'
import GetCast from './components/GetCast.jsx'
import About from './components/About.jsx'
import Donate from './components/Donate.jsx'
import ContactUs from './components/ContactUs.jsx'
import ReportIssue from './components/ReportIssue.jsx'
import PageNotFound from './components/PageNotFound.jsx'
import TestPage from './components/TestPage.jsx'

function App() {

  const [castInfoConditions, setCastInfoConditions] = useState({})

  return (
    <div className="App">
      <Snowfall style={{zIndex: -1}}/>
      <BrowserRouter>
        <Switch>
          {/* I think this is causing a bug. the components after the context provider are not rendering. */}
          <Route path="/" exact>
            <GetCastContext.Provider value={{castInfoConditions, setCastInfoConditions}}> 
              <Main />
            </GetCastContext.Provider>
          </Route>
          <Route path="/getCast" exact>
            <GetCastContext.Provider value={{castInfoConditions, setCastInfoConditions}}> 
              <GetCast />
            </GetCastContext.Provider>
          </Route>
          <Route path="/home" exact component={Homepage} />
          <Route path="/about" exact component={About} />
          <Route path="/donate" exact component={Donate} />
          <Route path="/contact" exact component={ContactUs} />
          <Route path="/report" exact component={ReportIssue} />
          <Route path="/testPage" exact component={TestPage} />
          <Route path="/" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
