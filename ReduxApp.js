import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

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

    const todoReducer = (state, action) => {
        switch (action.type) {
            case 'ADD_TODO': {
                return {
                    id: action.id,
                    title: action.title,
                    completed: false
                };
                break;
            }
            case 'TOGGLE_TODO': {
                if (state.id != action.id) {
                    return state;
                }
                return Object.assign({}, state, {completed: !state.completed});
                break;
            }
            default: {
                return state;
            }
        }
    };

    const todosReducer = (state, action) => {
        if (state == undefined) {
            return [];
        }
        switch (action.type) {
            case 'ADD_TODO': {
                return [
                    ...state,
                    todoReducer(undefined, action)
                ];
                break;
            }
            case 'TOGGLE_TODO': {
                return state.map(todo => todoReducer(todo, action));
                break;
            }
            default: {
                return state;
            }
        }
    };

    const store = createStore(counter);

    const Counter = ({value, onIncrement, onDecrement}) => (
        <div>
            <h3>{value}</h3>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
    );

    const render = () => {
        ReactDOM.render(
        <Counter value={store.getState()}
                 onDecrement={()=>store.dispatch({type:"DECREMENT"})}
                 onIncrement={()=>store.dispatch({type:"INCREMENT"})}/>,
            document.getElementById("redux_app")
        )
    };


    store.subscribe(render);
    render();

    const beforeState = [];
    const afterState = [{id:1, title:"Make dinner", completed:false}];
    const action = {type:"ADD_TODO", id:1, title:"Make dinner"};
    expect(todosReducer(beforeState, action)).toEqual(afterState);

    const beforeState2 = [{id:1, title:"Make dinner", completed:false}];
    const afterState2 = [{id:1, title:"Make dinner", completed:true}];
    const action2 = {type:"TOGGLE_TODO", id:1};
    expect(todosReducer(beforeState2, action2)).toEqual(afterState2);

    console.log("All tests are passed");

    const visibilityFilter = (state='SHOW_ALL', action) => {
        switch (action.type) {
            case 'SET_FILTER': {
                return action.filter;
                break;
            }
            default: {
                return state;
            }
        }
    };

    const todoApp = (state = {}, action) => {
        return {
            todos: todosReducer(state.todos, action),
            visibiityFilter: visibilityFilter(state.visibiityFilter, action)
        };
    };

    const todoStore = createStore(todoApp);
    console.log("Initial state: ", todoStore.getState());
    console.log("Adding todo");
    todoStore.dispatch({type: "ADD_TODO", id: 0, title:'Make dinner'});
    console.log("Current state: ", todoStore.getState());
    console.log("Adding another one");
    todoStore.dispatch({type: "ADD_TODO", id: 1, title:'Buy an appartment'});
    console.log("Current state: ", todoStore.getState());


};