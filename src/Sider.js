import React, { Component } from 'react'
import {Link,NavLink} from 'react-router-dom'
export default class Sider extends Component {
    render() {
        return (
            <ul style={{float: 'left'}}>
                <li><NavLink exact activeStyle={{background:'red',color:'#fff',fontSize:30}} to='/'>Todolist</NavLink></li> 
                <li><NavLink activeStyle={{background:'red',color:'#fff',fontSize:30}}  to='/hoc'>Hoc</NavLink></li>
                <li><NavLink activeStyle={{background:'red',color:'#fff',fontSize:30}}  to='/request'>Request</NavLink></li>   
                <li><Link to={'/userinfor/1'}>userinfor1</Link></li>   
                <li><Link to={'/userinfor/2'}>userinfor2</Link></li>   
                {
                    [1,2,3,4,5,6].map((item)=>(
                        <li key={item}><Link to={'/topic/'+item}>topic{item}</Link></li>   
                    ))
                }

            </ul>
        )
    }
}
