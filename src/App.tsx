import React, { useEffect } from 'react';
import {
  Router,
  Switch,
  Route,
} from 'react-router-dom';
import history from './history';
import { Customizer } from '@uifabric/utilities';

import { Home } from './routes';
import ColorInjector from './components/ColorInjector';
import { initTheme, Customizations, palette } from './styles';
import setFaviconUrl from './utils/setFaviconUrl';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {

  // anything that should be executed for the first time goes here
  useEffect(() => {
    initTheme();
    setFaviconUrl(logo);
  }, [])

  // the main router, handles all URL switching, if needed
  return (
    <div className="App">
      <ColorInjector theme={{ palette }}/>
      <Customizer {...Customizations}>
        <Router history={history}>
          <Switch>
            <Route path='/' exact component={Home}/>
          </Switch>
        </Router>
      </Customizer>
    </div>
  );
}

export default App;