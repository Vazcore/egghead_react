import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>Hello, {this.props.name}.  Age: {this.props.age}</h2>
            </div>
        );
    }
}

App.defaultProps = {
    age: 26
};

export default App;