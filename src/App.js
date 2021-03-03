import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Snowfall from 'react-snowfall'

import Homepage from './components/Homepage.jsx'
import Main from './components/Main.jsx'
import About from './components/About.jsx'
import ContactUs from './components/ContactUs.jsx'
import PageNotFound from './components/PageNotFound.jsx'

function App() {
  return (
    <div className="App">
      <Snowfall style={{zIndex: -1}}/>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/main" exact component={Main} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={ContactUs} />
          <Route path="/" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
