import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Sider extends Component {
    render() {
        return (
            <ul style={{float: 'left'}}>
                <li><Link to='/'>Todolist</Link></li> 
                <li><Link to='/hoc'>Hoc</Link></li>
                <li><Link to='/request'>Request</Link></li>   
            </ul>
        )
    }
}
