import React, { Component } from 'react'
import store from '../store';

export default class Todoing extends Component {
    constructor(){
        super();
        this.state = {
            todos: store.getState().todo
        }
    }
    componentDidMount() {
        this.subid = store.subscribe(()=>{
            this.setState({
                todos: store.getState().todo
            })
        })
    }
    componentWillUnmount(){
        this.subid();
    }
    delItem = (index)=>{
        store.dispatch({
            type:'del_item',
            index: index
        })
    }
    render() {
        return (
            <ul>
                {
                    this.state.todos.map((item,idx)=>(
                        <li key={item}>{item}---<button onClick={()=>this.delItem(idx)}>删除</button></li>
                    ))
                } 
            </ul>
        )
    }
}
