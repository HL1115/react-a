import React, { Component } from 'react'

export default class Todoing extends Component {
    render() {
        return (
            <div>
                <h1>正在进行</h1>
                <ul>
                    {
                        this.props.todo.map((item)=><li key={item}>{item}----<button>删除</button></li>)
                    }
                </ul>
            </div>
        )
    }
}
