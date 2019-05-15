import React, {Component} from 'react'

export default class Server extends Component {

    getTodoList = () => {
        return new Promise((resolve, reject) => {
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json())
                .catch(err => console.log(err))
        })
    };

    render() {
        return (
            <div>

            </div>
        );
    }
}