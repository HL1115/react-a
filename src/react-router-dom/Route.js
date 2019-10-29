import React, { Component } from 'react'
import {Consumer} from './context';
import pathToReg from 'path-to-regexp';
export default class Route extends Component {
    render() {
        return (
            <Consumer>
                {
                    (value)=>{
            
                        let {pathname} = value.location
                        let {path,component:Component} = this.props;
                        
                        if(pathname===path){
                            return <Component {...value}/>
                            {/* return React.createElement(component,value) */}
                        }
                        return null;
                    }
                }
            </Consumer>
        )
    }
}
