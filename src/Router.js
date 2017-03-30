import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Home } from './containers';

const RouterComponent = () => {
  return (
    <Router style={{marginTop: 24}} sceneStyle={{ marginTop: 54 }}>
      <Scene key="home" component={Home} title="Home" initial />
    </Router>
  );
};

export default RouterComponent;