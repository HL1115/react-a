import React, { Component } from 'react'
import ReactDOM from 'react-dom';
export default class Portals extends Component {
    cli = ()=>{
        console.log('portals click');
    }
    render() {
        console.log(this);
        return (
            ReactDOM.createPortal(
                <div onClick={this.cli}>{this.props.children}</div>,
                document.body
            )
        )
    }
}
