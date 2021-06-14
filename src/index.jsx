import '../assets/stylesheets/application.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

const reactContainer = document.querySelector("#root");
ReactDOM.render(<App />, reactContainer);