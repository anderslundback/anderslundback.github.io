import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import BrowserRouter from 'react-router-dom/BrowserRouter';

ReactDOM.render(
   <BrowserRouter>
    <App /> 
   </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
