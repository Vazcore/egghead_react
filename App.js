import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            name: 'Alexey',
            age: 26,
            color: {
                red: 128,
                green: 128,
                blue: 128
            }
        };
        this.update = this.onUpdate.bind(this);
    }

    onUpdate(e) {
        this.setState({color: {
                            red: ReactDOM.findDOMNode(this.refs.red.refs.color_input).value,
                            green: ReactDOM.findDOMNode(this.refs.green.refs.color_input).value,
                            blue: ReactDOM.findDOMNode(this.refs.blue.refs.color_input).value,
                    }
        });
    }


    render() {
        return (
            <div>
                <h3>Color Sliders</h3>
                <Slider ref="red" update={this.update} /> {this.state.color.red} <br />
                <Slider ref="green" update={this.update} /> {this.state.color.green}<br />
                <Slider ref="blue" update={this.update} /> {this.state.color.blue}<br />
                <hr />
                <Wrapper />
            </div>
        );
    }
}

class Wrapper extends React.Component {

    componentDidMount() {
        this.inner_node = document.getElementById("app_inner");
    }
    mount() {
        ReactDOM.render(<Counter />, this.inner_node);
    }
    unmount() {
        ReactDOM.unmountComponentAtNode(this.inner_node);
    }
    render() {
        return (
            <div>
                <button className="btn" onClick={this.mount.bind(this)}>Mount</button>
                <button className="btn" onClick={this.unmount.bind(this)}>UnMount</button>
                <div id="app_inner"></div>
            </div>
        );
    }
}

class Counter extends React.Component {
    constructor() {
        super();
        let count = 0;
        this.state = {count};
    }
    increment() {
        this.setState({count: this.state.count + 1});
    }

    componentWillMount() {
        console.log("Before Mount");
    }

    componentDidMount() {
        console.log("After Mounting");
    }

    componentWillUnmount() {
        console.log("Unmounting");
    }

    render() {
        console.log("Rendered");
        return (
            <div>
                <h3>Counter: {this.state.count}</h3>
                <button className="btn" onClick={this.increment.bind(this)}>Click me</button>
            </div>
        );
    }
}

class Slider extends React.Component {
    render() {
        return (
            <div class="form-group">
                <input ref="color_input"
                       type="range"
                       class="form-control"
                       min="0"
                       max="255"
                       onChange={this.props.update} />
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