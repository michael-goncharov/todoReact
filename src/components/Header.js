import React, {Component} from 'react'

export default class Header extends Component {

    getForm = node => {this._form = node};
    getInput = node => {this._input = node};

    handleSubmit = e => {
        console.log(33, e.currentTarget)
        e.preventDefault();
        let newItemValue = this._input.value;
        if(newItemValue) {
            this.props.addItem(newItemValue);
            this._form.reset();
        }
    };

    render() {
        return (
            <form ref={this.getForm} onSubmit={this.handleSubmit} className='border border-secondary rounded p-3 w-75 d-flex justify-content-between'>
                <div className="form-group mb-0 w-75">
                    <input ref={this.getInput} type="text" className="form-control" placeholder="type task here"/>
                </div>
                <div className={'btn-group'}>
                    <button type="submit" style={{maxHeight: 42}} className="btn btn-secondary ml-2">Add task</button>
                </div>
            </form>
            )
        }
}