import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import ShowTime from './ShowTime';
import Todolist from './Todolist/Todolist'
import Request from './Request';
import Parent from './Context/Parent';
import Hoc from './Hoc/Hoc';
import Sider from './Sider';
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Sider/>
                    <div style={{marginLeft: 50,float: 'left',border: '2px solid red'}}>
                        <Route exact path='/' component={Todolist} />
                        <Route path='/hoc' component={Hoc} />
                        <Route path='/request' component={Request}/>
                    </div>
                </div>
            </Router>
        )
    }
}
