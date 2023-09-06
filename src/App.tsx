import { FC } from 'react';

import './style.css';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
     (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
    </div>
  );
};
