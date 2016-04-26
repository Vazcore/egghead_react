import React from 'react';
import ReactDOM from 'react-dom';


class NumInput extends React.Component {
    constructor() {
        super();
        this.state = {val:0};
        this.update = this.update.bind(this);
    }
    componentWillMount() {
        this.setState({val:this.props.val});
    }
    update(e) {
        this.setState({val: +e.target.value});
    }
    render() {
        return (
            <div>
                <input type={this.props.type}
                       max={this.props.max}
                       onChange={this.update}
                       value={this.state.val}
                       min={this.props.min} />
                    {this.props.label}: {this.state.val}
            </div>
        );
    }
}

NumInput.propTypes = {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    val: React.PropTypes.number,
    label: React.PropTypes.string,
    type: React.PropTypes.oneOf(['number', 'range']),
};

NumInput.defaultProps = {
    min: 0,
    max: 255,
    val: 0,
    label: 'Default Label',
    type: 'number'
};

export default NumInput;