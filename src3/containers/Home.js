import React, { Component } from 'react'
import Todoinput from './Todoinput'
import Todoing from './Todoing'
import {connect} from 'react-redux';
class Home extends Component {

    render() {
        console.log(this.props)
        let {avatar_url,loginname} = this.props.userInfor;
        return (
            <div>
                <div>
                    <img src={avatar_url} alt=""/>
                    <p>{loginname}</p>
                </div>
                {/* <Todoinput/> */}
                <Todoing/>
            </div>
        )
    }
}

export default connect(
    state=>(
        {
            userInfor: state.getUserInfor
        }
    )
)(Home);