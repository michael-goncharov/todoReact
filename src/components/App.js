import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import ToDoList from './ToDoList'
import Header from './Header'

//import Server from './Server'
//import data from '../tasksList'

export default class App extends React.Component{

    data = JSON.parse(localStorage.getItem('data')) || [];
    state = {todoItems: this.data};


    getListFromServer = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                this.data = this.data.concat(json);
                return this.data
            })
            .then(list => this.setState({todoItems: list}))
            .catch(err => console.log(err))
    };


    addItem = taskText => {
        this.data.unshift({
            id: this.data.length+1,
            title: taskText,
            completed: false
        });
        this.setState({todoItems: this.data});
    };

    removeItem = index => {
        this.data.splice(index, 1);
        this.setState({todoItems: this.data});
    };

    markItem = index => {
        var todo = this.data[index];
        todo.completed = !todo.completed;
        this.setState({todoItems: this.data});
    };

    changeItem = (newText, index) => {
        let changedItem = this.data[index];
        changedItem.title = newText;
        this.data[index] = changedItem;
        this.setState({todoItems: this.data})
    };

    clearList = () => {
        this.data = [];
        this.setState({todoItems: this.data});
    };

    render (){
            localStorage.setItem('data', JSON.stringify(this.data));
        return(
            <div className="container">
                <div className={'w-100 mt-5 mb-4 pr-3 d-flex justify-content-between'}>
                    <Header addItem={this.addItem}/>
                    <div className={'btn-group align-items-center'}>
                        <button type="button"  onClick={this.clearList} style={{maxHeight: 42}} className="btn btn-secondary ml-2">Clear list</button>
                        <button type="button" onClick={this.getListFromServer} style={{maxHeight: 42}} className="btn btn-secondary ml-2">Download</button>
                    </div>
                </div>

                <ToDoList tasks={this.data} removeItem={this.removeItem} markItem={this.markItem} changeItem={this.changeItem}/>
            </div>)
    }

}