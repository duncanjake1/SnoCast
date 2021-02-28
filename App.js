import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Snowfall from 'react-snowfall'

import Homepage from './components/Homepage.jsx'
import Main from './components/Main.jsx'
import PageNotFound from './components/PageNotFound.jsx'

function App() {
  return (
    <div className="App">
      <Snowfall style={{zIndex: -1}}/>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/main" exact component={Main} />
          <Route path="/" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
