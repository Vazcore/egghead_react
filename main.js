import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import Basic from './Basic';
import Mixin from './Mixin';
import NumInput from './NumInput';
import Nested from './Nested';
import { app } from './ReduxApp';

app();

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

ReactDom.render(
    <div>
        <h3>Reusable Inputs</h3>
        <NumInput type="number" label="Red" />
        <NumInput type="range" />
        <NumInput type="range" label="Green" />
        <NumInput type="range" label="Blue" />
        <NumInput type="number" label="Age" val={26} />
    </div>,
    document.getElementById('num_input')
);

ReactDom.render(
    <Nested />,
    document.getElementById("nested")
);


/* Custom */
let nav = document.getElementById("main_nav");
let blocks = document.getElementsByClassName("container");
let onNavClick = (e) => {
    if (e.target.tagName == 'A') {
        let type = e.target.innerHTML.toLowerCase();
        let block = document.getElementById(type);
        let a_s = nav.getElementsByTagName("a");
        for (let i=0; i < a_s.length; i++) {
            a_s[i].parentElement.classList.remove("active");
            blocks[i].classList.add("hidden");
        }
        block.classList.remove("hidden");
        e.target.parentElement.classList.add("active");
    }
};

nav.addEventListener("click", onNavClick);
