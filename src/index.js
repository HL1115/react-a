import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Link,Switch,Redirect} from './react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import NoMatch from './containers/NoMatch'
import store from './store';
import {Provider} from 'react-redux';
import Login from './containers/Login';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <div>
                    <Link to='/home'>首页</Link>
                    <Link to='/about'>about</Link>
                    <Link to='/login'>登录</Link>
                </div>
                <div>
                    <Switch>
                        <Route exact path='/home' component={Home}/>
                        <Route path='/home/123' component={Home}/>
                        <Route path='/about' component={About}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/nomatch' component={NoMatch}/>
                        <Redirect to='/nomatch'/>
                    </Switch>
                </div>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
)