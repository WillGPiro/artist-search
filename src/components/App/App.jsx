import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import SearchControl from '../../containers/SearchControl.jsx';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ="/" component={SearchControl} />
      </Switch>
    </Router>
  );
}







  
