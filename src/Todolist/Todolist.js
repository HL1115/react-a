import React, { Component } from 'react'
import Todoing from './Todoing';
import Todoinput from './Todoinput';

export default class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            todo: [1,2,3]
        }
    }
    addItem = (msg)=>{
        // this.state.todo.push(msg)
        // console.log(this.state.todo)
        this.setState({
            todo: [...this.state.todo,msg]
        })
        console.log(msg);
    }
    render() {
        return (
            <div>
                <Todoinput addTodo={this.addItem}/>
                <Todoing todo={this.state.todo}/>
            </div>
        )
    }
}
