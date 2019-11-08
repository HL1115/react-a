import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getUserInforWithFetch} from '../actions/actionCreators';
import Button from './Button';

function Login(props){
    // let disLogin = bindActionCreators(getUserInforWithFetch,props.dispatch)
    
    // function login(){
        // disLogin();
        // props.dispatch(getUserInforWithFetch());
    // }
    return (
        <div>
            <p>
                <input type="text"/>
            </p>
            <p>
                <input type="password"/>
            </p>
            <p>
                <Button login={props.disLogin}/>
            </p>
        </div>
    )
}
let mapStateToProps = (state)=>{};
let mapDispatchToProps = (dispatch)=>{
    return {
        disLogin:bindActionCreators(
            getUserInforWithFetch,
            dispatch
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);