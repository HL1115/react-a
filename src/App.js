import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import ShowTime from './ShowTime';
import Todolist from './Todolist/Todolist'
import Request from './Request';
import Parent from './Context/Parent';
import Hoc from './Hoc/Hoc';
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to='/'>Todolist</Link><br/>
                    <Link to='/hoc'>Hoc</Link><br/>
                    <Link to='/request'>Request</Link>
                    <Route exact path='/' component={Todolist} />
                    <Route path='/hoc' component={Hoc} />
                    <Route path='/request' component={Request}/>
                </div>
            </Router>
        )
    }
}
