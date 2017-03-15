'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class ByeByeApp {
  byebyeRender() {
    ReactDOM.render(
      <h1>Bye Bye!</h1>,
      document.getElementById('stop')
    );
  }
}

var byebyeApp = new ByeByeApp();
byebyeApp.byebyeRender();
