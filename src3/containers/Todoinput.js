import React, { Component } from 'react'
import store from '../store';
import {addItem,changevalue} from '../actions/actionCreators';
export default class Todoinput extends Component {
    constructor(){
        super();
        this.state = {
            inputValue: store.getState().inputchange
        }
    }
    add = (e)=>{
        if(e.keyCode === 13){
            store.dispatch(addItem(e.target.value))
        }
    }
    handleChange = (e)=>{
        store.dispatch(changevalue(e.target.value))
    }
    componentDidMount() {
        store.subscribe(()=>{
            this.setState({
                inputValue: store.getState().inputchange
            })
        })
    }
    render() {
        return (
            <div>
                <input onChange={this.handleChange} value={this.state.inputValue} onKeyDown={this.add} type="text"/>
            </div>
        )
    }
}
