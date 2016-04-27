import { createStore } from 'redux';

export function app() {

    const block = document.getElementById('redux');

    const counter = (state, action) => {
        if (state === undefined) {
            return 0;
        }
        switch (action.type) {
            case "INCREMENT": {
                return state + 1;
                break;
            }
            case "DECREMENT": {
                return state - 1;
                break;
            }
            default: {
                return state;
            }
        }
    };

    const store = createStore(counter);

    const render = () => {
        block.innerHTML = store.getState();
    };

    store.subscribe(render);
    render();

    document.body.addEventListener("click", (e) => {
        store.dispatch({type:'INCREMENT'});
    });


};