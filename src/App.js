import React, { Component } from 'react'
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';

import ShowTime from './ShowTime';
import Todolist from './Todolist/Todolist'
import Request from './Request';
import Parent from './Context/Parent';
import Hoc from './Hoc/Hoc';
import Sider from './Sider';
import { Button } from 'antd';
import NoMatch from './NoMatch';
import UserInfor from './Router/UserInfor';
import Topic from './Router/Topic';
// antd使用：
// 1、下载安装antd框架 ：npm i antd 
// 2、在某个css里引入antd的css：@import '~antd/dist/antd.css';
// 3、在需要的组件内import相应的组件，然后使用
export default class App extends Component {
    render() {
        // 所有路由的组件都得放在 BrowserRouter 里
        // BrowserRouter里只能有一个子元素
        return (
            <Router basename='todolist'>
                <div>
                    {/* <UserInfor /> */}
                    {/* <UserInfor /> */}
                    <Sider/>
                    {/* <Button type="primary">Primary</Button> */}
                    <div style={{marginLeft: 50,float: 'left',border: '2px solid red'}}>
                        <Switch>
                            <Route exact path='/' render={()=><Todolist/>}/>
                            <Route path='/hoc' component={Hoc} />
                            <Route path='/request' component={Request}/>
                            <Route path='/userinfor/:id' component={UserInfor}/>
                            <Route path='/Topic/:page' component={Topic}/>
                            <Redirect from='/old' to='hoc'/>
                            <Route path='*' component={NoMatch}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}
