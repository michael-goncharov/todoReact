import React, {Component} from 'react'
import ToDo from './ToDo'

export default class ToDoList extends Component {

    toDoMapper = (element, index) => (
        <li key = {index} className="list-group-item">
            <ToDo  removeItem = {this.props.removeItem}
                   markItem = {this.props.markItem}
                   changeItem = {this.props.changeItem}
                   task = {element}
                   index = {index}/>
        </li>
    );

    render() {
        let elements = this.props.tasks.map( this.toDoMapper );
        return (
            <div className="card">
                <ul className="list-group list-group-flush">
                    {elements}
                </ul>
            </div>
        )
    }
}