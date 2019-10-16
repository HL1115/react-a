import React, { Component } from 'react'
import ReactDOM from 'react-dom';
export default class Portals extends Component {
    cli = ()=>{
        console.log('portals click');
    }
    render() {
        return (
            ReactDOM.createPortal(
                <div onClick={this.cli}>Portal</div>,
                document.body
            )
        )
    }
}
