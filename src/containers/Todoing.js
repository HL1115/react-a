import React, { Component } from 'react'
import store from '../store';

export default class Todoing extends Component {
    constructor(){
        super();
        this.state = {
            todos: store.getState()
        }
    }
    componentDidMount() {
        store.subscribe(()=>{
            this.setState({
                todos: store.getState()
            })
        })
    }
    render() {
        return (
            <ul>
                {
                    this.state.todos.map((item)=>(
                        <li key={item}>{item}</li>
                    ))
                } 
            </ul>
        )
    }
}
