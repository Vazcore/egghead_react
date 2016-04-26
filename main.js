import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import Basic from './Basic';
import Mixin from './Mixin';

ReactDom.render(
    <App name="Alexey" />,
    document.getElementById('app')
);

ReactDom.render(
    <Basic name="Alexey" />,
    document.getElementById('basic')
);


ReactDom.render(
    <Mixin />,
    document.getElementById('mixin')
);