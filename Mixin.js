import React from 'react';
import ReactDOM from 'react-dom';

let MixinFactory = InnerComponent => class extends React.Component {
    constructor() {
        super();
        this.update = this.update.bind(this);
        this.state = {counter: 0};
    }

    update() {
        this.setState({counter: this.state.counter + 1});
    }

    componentWillMount() {
        console.log("Will Mount");
    }

    componentDidMount() {
        console.log("Mounted");
    }

    render() {
        return (
            <InnerComponent update={this.update}
                            {...this.props}
                            {...this.state}/>
        );
    }
};

const Button = (props) => <button className="btn" onClick={props.update}>{props.text} {props.counter}</button>;
let ButtonMixed = MixinFactory(Button);

const Label = (props) => <label onMouseMove={props.update}>{props.text} {props.counter}</label>;
let LabelMixed = MixinFactory(Label);

class Mixin extends React.Component {

    render() {
        return (
            <div>
                <h2>Mixin Elements</h2>
                <ButtonMixed text="Click me:" />
                <br />
                <br />
                <LabelMixed text ="Hover me:" />
            </div>
        );
    }
}


export default Mixin;