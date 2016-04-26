import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            name: 'Alexey',
            age: 26,
            color: {
                red: 0,
                green: 0,
                blue: 0
            }
        };
        this.update = this.onUpdate.bind(this);
    }

    onUpdate(e) {
        this.setState({color: {
                            red: ReactDOM.findDOMNode(this.refs.red).value,
                            green: ReactDOM.findDOMNode(this.refs.green).value,
                            blue: ReactDOM.findDOMNode(this.refs.blue).value,
                    }
        });
    }

    render() {
        return (
            <div>
                <Slider ref="red" update={this.update} /> {this.state.color.red} <br />
                <Slider ref="green" update={this.update} /> {this.state.color.green}<br />
                <Slider ref="blue" update={this.update} /> {this.state.color.blue}<br />
            </div>
        );
    }
}

class Slider extends React.Component {
    render() {
        return (
            <input type="range"
                   min="0"
                   max="255"
                   onChange={this.props.update} />
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