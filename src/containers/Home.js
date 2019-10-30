import React, { Component } from 'react'
import Todoinput from './Todoinput'
import Todoing from './Todoing'

export default class Home extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <Todoinput/>
                <Todoing/>
            </div>
        )
    }
}
