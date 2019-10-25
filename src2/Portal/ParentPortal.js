import React, { Component } from 'react'
import Portals from './Portals'

export default class ParentPortal extends Component {
    cli = ()=>{
        console.log('ParentPortal click');
    }
    render() {
        return (
            <div onClick={this.cli}>
                <Portals>
                    <h1>音乐</h1>
                    <h1>音乐</h1>
                </Portals>
                <Portals>
                    <li>列表</li>
                </Portals>
            </div>
        )
    }
}
