import React, { Component } from 'react'

export default class Todoing extends Component {
    render() {
        return (
            <div>
                <h1>正在进行</h1>
                <ul>
                    {
                        this.props.todo.map((item,idx)=><li key={idx}>{item}----<button onClick={()=>{this.props.delTodo(idx)}}>删除</button></li>)
                    }
                </ul>
            </div>
        )
    }
}
