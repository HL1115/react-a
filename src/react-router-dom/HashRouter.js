import React, { Component } from 'react'
import {Provider} from './context';

export default class HashRouter extends Component {
    constructor(){
        super();
        this.state = {
            location:{
                pathname:window.location.hash.slice(1) || '/'
            }
        }
    }
    componentDidMount(){
        // 初始加上#
        window.location.hash = window.location.hash.slice(1) || '/'
        // 当hash改变的时候
        window.addEventListener('hashchange',()=>{
            this.setState({
                location:{
                    pathname: window.location.hash.slice(1) || '/'
                }

            })
        })

        // let that = this
        // window.onhashchange = function(){
        //     console.log(this)
        //     that.setState({
        //         location: window.location.hash.slice(1) || '/'
        //     })
        // }
    }
    render() {
        return (
            <Provider value={this.state}>
                {
                    this.props.children
                }
            </Provider>
        )
    }
}
