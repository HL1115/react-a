import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Link} from './react-router-dom';
import Home from './containers/Home';
import About from './containers/About';


ReactDOM.render(
    <Router>
        <div>
            <div>
                <Link to='/home'>首页</Link>
                <Link to='/about'>about</Link>
                {/* <a href='#/home'>首页</a> */}
                {/* <a href='#/about'>about</a> */}
            </div>
            <div>
                <Route path='/home' component={Home}/>
                <Route path='/about' component={About}/>
            </div>
        </div>
    </Router>,
    document.getElementById('root')
)