import React, { Component } from 'react'
import Header from './components/Header'
import {BrowserRouter as Router,Route} from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div className='main'>
                        <div className="content">
                            <Route />
                        </div>
                        <div className="sider">

                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}
