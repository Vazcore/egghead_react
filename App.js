import React from 'react';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            name: 'Alexey',
            age: 26
        };
    }

    onUpdate(e) {
        this.setState({name: e.target.value});
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.onUpdate.bind(this)} />
                <h1>Hola, {this.state.name}. Age: {this.state.age}</h1>
            </div>
        );
    }
}

App.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number.isRequired
};

App.defaultProps = {
    age: 26
};

export default App;