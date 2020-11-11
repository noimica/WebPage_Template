import React, { Suspense, lazy } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Loading from './components/Loading';
import NoMatch from './components/NoMatch';
import Header from './components/Header';
import Footer from './components/Footer';
const About = lazy(() => import('./components/pages/About'));
const Top = lazy(() => import('./components/pages/Top'));

const App = () => (
  <Router>
    <Header />
    <Suspense fallback={Loading}>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </Suspense>
    <Footer />
  </Router>
);
export default App;