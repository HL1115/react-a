import React, { Component } from 'react'
import Portals from './Portals'

export default class ParentPortal extends Component {
    cli = ()=>{
        console.log('ParentPortal click');
    }
    render() {
        return (
            <div onClick={this.cli}>
                <Portals />
            </div>
        )
    }
}
