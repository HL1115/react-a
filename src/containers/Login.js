import React from 'react';
import {connect} from 'react-redux';
import {getUserInfor} from '../actions/actionCreators';
// whatwg-fetch
function Login(props){
    function login(){

        fetch('https://cnodejs.org/api/v1/user/alsotang')
            .then(res=>res.json())
            .then(res=>{
                // console.log(res);
                // props.dispatch({
                //     type:'get_user_infor',
                //     userInfor:{
                //         avatar_url:res.data.avatar_url,
                //         loginname:res.data.loginname
                //     }
                // })
                props.dispatch(getUserInfor({
                    avatar_url:res.data.avatar_url,
                    loginname:res.data.loginname
                }))
                props.history.push('/home')
            })
    }
    return (
        <div>
            <p>
                <input type="text"/>
            </p>
            <p>
                <input type="password"/>
            </p>
            <p>
                <button onClick={login}>登录</button>
            </p>
        </div>
    )
}
export default connect()(Login);