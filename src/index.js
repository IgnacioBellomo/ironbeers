import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
ReactDOM.render(

<BrowserRouter basename="/ironbeers">
<App />
</BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();
