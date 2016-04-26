import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

ReactDom.render(
    <App txt="some string" />,
    document.getElementById('app')
);