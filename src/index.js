import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Link,Redirect} from './react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import NoMatch from './containers/NoMatch'

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
                <Route exact path='/home' component={Home}/>
                <Route path='/home/123' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/nomatch' component={NoMatch}/>
                <Redirect to='/nomatch'/>
            </div>
        </div>
    </Router>,
    document.getElementById('root')
)