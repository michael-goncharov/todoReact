import React, {Component} from 'react'

export default class ToDo extends Component {

    state = {isInEditMode: false};

    getInput = node => {
        this._input = node
    };
    onClickClose = () => {
        this.props.markItem(parseInt(this.props.index))
    };
    onClickRemove = () => {
        this.props.removeItem(parseInt(this.props.index))
    };
    onKeyPress = e => {
        if (e.key === 'Enter') {
            let newItemValue = this._input.value;
            if (newItemValue) {
                this.props.changeItem(newItemValue, this.props.index);
                this.changeEditMode()
            }
        }
        if (e.key === 'Esc') {
            this.changeEditMode()
        }
    };

    changeEditMode = () => {
        //this.setState({isInEditMode: !this.state.isInEditMode})
        this.setState(currentState => ({
            isInEditMode: !currentState.isInEditMode
        }));
    };


    renderEditView = () => {
        const {task} = this.props;
        return (<div className={task.completed ? 'bg-secondary' : 'bg-light'}>
            <div className='d-flex justify-content-between'>
                <input
                    type="text"
                    defaultValue={task.title}
                    onKeyPress={this.onKeyPress}
                    autoFocus={true}
                    ref={this.getInput}
                />
                <div className={'bg-white'}>
                    <button onClick={this.onClickClose} style={{minWidth: 100}} className='btn btn-info ml-2'>
                        {task.completed ? 'Open task' : 'Complete'}</button>
                    <button onClick={this.onClickRemove} className='btn btn-info ml-2'>Delete</button>
                </div>
            </div>
        </div>)
    };

    renderRegularView = () => {
        const {task} = this.props;
        return (<div className={task.completed ? 'bg-secondary' : 'bg-light'}>
            <div className='d-flex justify-content-between'>
                <p onDoubleClick={this.changeEditMode} className='p-2 mb-0'>{task.title}</p>
                <div className={'bg-white'}>
                    <button onClick={this.onClickClose} style={{minWidth: 100}} className='btn btn-info ml-2'>
                        {task.completed ? 'Open task' : 'Complete'}</button>
                    <button onClick={this.onClickRemove} className='btn btn-info ml-2'>Delete</button>
                </div>
            </div>
        </div>)
    };

    render() {
        const {task} = this.props;
        return !task.completed && this.state.isInEditMode ? this.renderEditView() : this.renderRegularView();
    }
}
