import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { 
  ButtonPage,
  ColorPage,
  HomePage,
  ExamplesPage
} from './pages';

const RouterComponent = () => {
  return (
    <Router style={{marginTop: 24}} sceneStyle={{ marginTop: 54 }}>
      <Scene key="home" component={HomePage} title="Home" />
      <Scene key="colors" component={ColorPage} title="Colors" />
      <Scene key="buttons" component={ButtonPage} title="Buttons"/>
      <Scene key="examples" component={ExamplesPage} title="Examples" initial />
    </Router>
  );
};

export default RouterComponent;