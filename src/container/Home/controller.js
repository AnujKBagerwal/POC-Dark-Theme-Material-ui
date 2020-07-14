import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BooksDeteils from './BooksDeteils';
import DisplayMobile from './DisplayMobile';
import Home from './Home';
import SuitsDetails from './SuitsDetails';
import ShoesDetails from './ShoesDetails';
import HeadSetsDetails from './HeadSetsDetails';

// component is managing Nested Routing in Project
const controller = () => {
  return (
    <div>
      <Switch>
        <Route path="/home" component={Home} exact />
        <Route path="/home/books" component={BooksDeteils} exact />
        <Route path="/home/mobiles" component={DisplayMobile} exact />
        <Route path="/home/suits" component={SuitsDetails} exact />
        <Route path="/home/shoes" component={ShoesDetails} exact />
        <Route path="/home/headsets" component={HeadSetsDetails} exact />
      </Switch>
    </div>
  );
};

export default controller;
