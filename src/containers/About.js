import React, { Component } from 'react'
import store from '../store';

export default class About extends Component {
    add = (e)=>{
        if(e.keyCode === 13){
            store.dispatch({type:'add_item',value:e.target.value})
        }
    }
    render() {
        return (
            <div>
                <input onKeyDown={this.add} type="text"/>
            </div>
        )
    }
}
