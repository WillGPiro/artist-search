import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import SearchControl from '../../containers/SearchControl.jsx';
import ReleasesContainer from '../../containers/ReleasesContainer.jsx';
import RecordingsContainer from '../../containers/RecordingsContainer.jsx';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ="/" component={SearchControl} />
        <Route exact path ="/artist/:artistId" component={ReleasesContainer} />
        <Route exact path ="/recording/:releaseId" component={RecordingsContainer} />
      </Switch>
    </Router>
  );
}







  
