import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
import Good from './Good';
import All from './All';
export default class Home extends Component {
    render() {
        let url = this.props.match.url
        return (
            <div>
                <div>
                    <Link to={url+'/all'}>全部</Link>
                    <Link to={url+'/good'}>精华</Link>
                    <Link to={url+'/share'}>分享</Link>
                    <Link to={url+'/job'}>招聘</Link>
                </div>
                <div>
                    <Route path={`${url}/all`} component={All} />
                    <Route path={`${url}/good`} component={Good} />
                    {/* <Route path='/home/:tab' component={List}/> */}
                </div>
            </div>
        )
    }
}
