import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './assets/scss/App.scss';
import {Header} from "./components/index";
import {Player} from "./components/index";
import {Home,Tracks,Artists} from "./pages";

function App() {
  const player = useSelector(state => state.player)

  return (
    <div >
      <Router>
        <Header/>
        <Container>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/tracks">
              <Tracks/>
            </Route>        
            <Route exact path="/artists">
              <Artists/>
            </Route>    
          </Switch>
        </Container>
        {player.show && <Player/>}
      </Router>
    </div>
  );
}

export default App;
