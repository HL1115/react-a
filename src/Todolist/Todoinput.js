import React, { Component } from 'react'
//子组件---->父组件传递数据，调用子组件时往子组件传递一个函数
// 子组件通过props调用该函数

export default class Todoinput extends Component {
    handleInput = (e)=>{
        if(e.keyCode === 13){
            this.props.addTodo(e.target.value);
        }
    }
    render() {
        return (
            <div>
                <input onKeyDown={(e)=>this.handleInput(e)} type="text"/>
            </div>
        )
    }
}
