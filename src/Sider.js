import React, { Component } from 'react'
import {Link,NavLink} from 'react-router-dom'
export default class Sider extends Component {
    render() {
        return (
            <ul style={{float: 'left'}}>
                <li><NavLink exact activeStyle={{background:'red',color:'#fff',fontSize:30}} to='/'>Todolist</NavLink></li> 
                <li><NavLink activeStyle={{background:'red',color:'#fff',fontSize:30}}  to='/hoc'>Hoc</NavLink></li>
                <li><NavLink activeStyle={{background:'red',color:'#fff',fontSize:30}}  to='/request'>Request</NavLink></li>   
                <li><Link to={
                    {
                        pathname:'/userinfor',
                        search:'?id=1',
                        state:100
                    }
                }>userinfor1</Link></li>   
                <li><Link to={
                    {
                        pathname:'/userinfor',
                        search:'?id=2',
                        state:200
                    }
                }>userinfor2</Link></li>   
            </ul>
        )
    }
}
