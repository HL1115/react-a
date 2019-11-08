import React from 'react';

export default function Button(props){
    return <button onClick={()=>{props.login()}}>
        登录
        </button>
}