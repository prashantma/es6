import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './hello';

class ReactHelloApp {
  helloRender(){
    ReactDOM.render(
      <Hello name="Prashant" />,
      document.getElementById('root')
    );
  }
}

var reactHelloApp = new ReactHelloApp();
reactHelloApp.helloRender();
