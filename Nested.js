import React from 'react';
import ReactDOM from 'react-dom';

class Nested extends React.Component {
    constructor() {
        super();
        this.state = {data: [
            {id:1, name:'Alexey Gabrusev'},
            {id:2, name:'Monica Smith'},
            {id:3, name:'Cris Johnson'},
            {id:4, name:'John Snow'},
            {id:5, name:'Cris Metzen'}
        ]};
    }

    render() {
        let rows = this.state.data.map( person => {
            return <PersonRow key={person.id} data={person} />
        });

        return (
            <div>
                <hr />
                <Button>I <Heart /> React</Button>
                <table>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>

        );
    }
}

const PersonRow = (props) => {
    return (
        <tr>
            <td> {props.data.id} </td>
            <td> {props.data.name} </td>
        </tr>
    );
};

class Button extends React.Component {
    render() {
        return (
            <button>{this.props.children}</button>
        );
    }
}

const Heart = () => <span className="class1 class2"> Love </span>;

export default Nested;
