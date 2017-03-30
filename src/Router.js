import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { 
  ColorPage, 
  Home 
} from './containers';

const RouterComponent = () => {
  return (
    <Router style={{marginTop: 24}} sceneStyle={{ marginTop: 54 }}>
      <Scene key="home" component={Home} title="Home" initial />
      <Scene key="colors" component={ColorPage} title="Colors" />
    </Router>
  );
};

export default RouterComponent;