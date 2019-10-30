import React, { Component } from 'react'
import {Consumer} from './context';
import pathToRegExp from 'path-to-regexp';

export default class Switch extends Component {
    render() {
        return (
            <Consumer>
                {
                    (value)=>{
                        let pathname = value.location.pathname;
                        let children = this.props.children
                        for(var i=0;i<children.length;i++){
                            let {path,exact} = children[i].props;
                            let reg = pathToRegExp(path||"",[],{end:exact||false})
                            if(reg.test(pathname)){
                                return children[i];
                            }
                        }
                    }
                }
            </Consumer>
        )
    }
}
