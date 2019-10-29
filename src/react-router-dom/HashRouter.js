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
        window.location.hash = window.location.hash.slice(1) || '/'
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
