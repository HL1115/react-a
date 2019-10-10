import React, { Component } from 'react'
//子组件---->父组件传递数据，调用子组件时往子组件传递一个函数
// 子组件通过props调用该函数

// 受控组件和非受控组件

export default class Todoinput extends Component {
    constructor(){
        super();
        this.state = {
            val: 'todo'
        }
    }
    handleInput = (e)=>{
        if(e.keyCode === 13){
            this.props.addTodo(e.target.value);
        }
    }
    handleChange = (e)=>{
        this.setState({
            val: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input onChange={(e)=>this.handleChange(e)} value={this.state.val} onKeyDown={(e)=>this.handleInput(e)} type="text"/>
            </div>
        )
    }
}
